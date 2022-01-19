import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { FormikInput } from '..';
import { useCart } from '../../context';
import { useCreateOrderMutation } from '../../graphql/__generated__';
import { useUser } from '../../hooks/useUser';
import { calculateCartTotal } from '../../lib/calculateCartTotal';
import { checkoutSchema } from '../../models/checkout.form';
import { FormikStripe } from '../forms/formik-stripe';
import { FormGroup, FormikFieldError, FormLabel, FormTitle } from '../forms/styles';
import { SubmitButton } from '../forms/submit-button';

interface Props {}

const CheckoutFormStyles = styled.form`
  box-shadow: ${props => props.theme.styles.boxShadow};
  border-radius: ${props => props.theme.styles.borderRadius};
  border: 1px solid rgba(0, 0, 0, 0.06);
  display: grid;
  grid-gap: 1rem;
`;

// export const Checkout = (props: Props) => {
//   const [error, setError] = useState<{ message?: string | undefined }>();
//   const [loading, setLoading] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
//     e.preventDefault();
//     setLoading(true);
//     if (stripe && elements) {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement)!,
//       });
//       console.log(paymentMethod);
//       if (error) {
//         setError(error);
//       }
//       setLoading(false);
//     }
//   };

//   return (
//     <CheckoutFormStyles onSubmit={handleSubmit}>
//       <CardElement />
//       {error && <p>{error.message}</p>}
//       <Button type="submit"> {loading ? <Loader /> : 'Checkout'}</Button>
//     </CheckoutFormStyles>
//   );
// };

interface Props {}

export const CheckoutForm = (props: Props) => {
  const { cartItems, shop, shipping } = useCart();
  const { user } = useUser();
  const [createOrder] = useCreateOrderMutation();
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  return (
    <>
      <FormTitle>Ready {user?.firstName}?</FormTitle>
      <Formik
        initialValues={{
          address: '',
          zipCode: '',
          city: '',
          stripeComplete: false,
        }}
        validationSchema={checkoutSchema}
        onSubmit={async ({ stripeComplete, ...values }, { setSubmitting, setFieldError }) => {
          try {
            console.log(stripeComplete);

            if (stripe && elements) {
              const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement)!,
              });
              console.log(paymentMethod);
              if (error) {
                setFieldError('stripeComplete', error.message);
                toast.error(`Error charging card: ${error.message}`);
                return;
              }

              const res = await createOrder({
                variables: {
                  input: {
                    ...values,
                    shop,
                    total: calculateCartTotal(cartItems, shipping),
                    stripePaymentMethodId: paymentMethod!.id,
                    orderItems: cartItems.map(({ product, qty }) => ({ product: product.id, qty })),
                  },
                },
              });
              router.push(`/orders/${res.data?.createOrder.id}`);
              toast.success('Your order was successful!');
            }
          } catch (error) {
            if (error instanceof Error) {
              toast.error(`Error placing order: ${error.message}`);
            }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <FormikInput name="address" type="text" label="Address" fullWidth />
            <FormikInput name="zipCode" type="text" label="Zip Code" fullWidth />
            <FormikInput name="city" type="text" label="City" fullWidth />
            <FormikStripe name="stripeComplete" label="Credit Card" />

            <SubmitButton
              loading={isSubmitting}
              disabled={!dirty || !isValid || isSubmitting}
              text={`Pay ${calculateCartTotal(cartItems, shipping)} €`}
              fullWidth
            />
          </Form>
        )}
      </Formik>
    </>
  );
};
