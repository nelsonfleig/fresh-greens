import { Formik, Form } from 'formik';
import router from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { CenterInPage, FormikInput } from '../components';
import { FormikDropzone } from '../components/forms/formik-dropzone';
import { FormTitle, FormWrapper } from '../components/forms/styles';
import { SubmitButton } from '../components/forms/submit-button';
import { addProductSchema } from '../models/add-product.form';

interface Props {}

const Checkout = (props: Props) => {
  return (
    <CenterInPage>
      <FormWrapper>
        <FormTitle>Checkout</FormTitle>
        <Formik
          initialValues={{
            name: '',
            description: '',
            price: 0,
            unit: '',
            productImage: null,
          }}
          validationSchema={addProductSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              console.log(values);
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
              <FormikInput name="firstName" type="text" label="First Name" fullWidth />
              <FormikInput name="lastName" type="text" label="Last Name" fullWidth />
              <FormikInput name="address" type="text" label="Address" fullWidth />
              <FormikInput name="zipCode" type="text" label="Zip Code" fullWidth />
              <FormikInput name="city" type="text" label="City" fullWidth />
              <SubmitButton
                loading={isSubmitting}
                disabled={!dirty || !isValid || isSubmitting}
                text="Place Order"
                fullWidth
              />
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </CenterInPage>
  );
};

export default Checkout;
