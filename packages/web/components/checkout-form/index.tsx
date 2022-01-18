import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { Button, FormikInput } from '..';
import { Loader } from '..';
import styled from 'styled-components';
import { FormWrapper } from '../forms/styles';
import { checkoutSchema } from '../../models/checkout.form';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { SubmitButton } from '../forms/submit-button';
import { useCart } from '../../context';
import { calculateCartTotal } from '../../lib/calculateCartTotal';
import { StripeProvider } from '../../lib/stripe';

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
  const { cartItems, shipping } = useCart();

  return (
    <StripeProvider>
      <Formik
        initialValues={{
          address: '',
          zipCode: '',
          city: '',
        }}
        validationSchema={checkoutSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            console.log(values);
            //router.push(`/shops/${shop.data?.createShop.slug}`);
            toast.success('Your shop has been created!');
          } catch (error) {
            if (error instanceof Error) {
              toast.error(`Error creating shop: ${error.message}`);
            }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, isValid, dirty, errors }) => (
          <Form>
            <FormikInput name="firstName" type="text" label="First name" fullWidth />
            <FormikInput name="lastName" type="text" label="Last name" fullWidth />
            <FormikInput name="address" type="text" label="Address" fullWidth />
            <FormikInput name="zipCode" type="text" label="Zip Code" fullWidth />
            <FormikInput name="city" type="text" label="City" fullWidth />

            <SubmitButton
              loading={isSubmitting}
              disabled={!dirty || !isValid || isSubmitting}
              text={`Pay ${calculateCartTotal(cartItems, shipping)} €`}
              fullWidth
            />
          </Form>
        )}
      </Formik>
    </StripeProvider>
  );
};
