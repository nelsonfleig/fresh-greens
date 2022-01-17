import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { CenterInPage, FormikInput } from '../../components';
import { FormikDropzone } from '../../components/forms/formik-dropzone';
import { FormTitle, FormWrapper } from '../../components/forms/styles';
import { SubmitButton } from '../../components/forms/submit-button';
import { useAddProductMutation } from '../../graphql/__generated__';
import { addProductSchema } from '../../models/add-product.form';

const AddProduct: NextPage = () => {
  const router = useRouter();
  const [addProduct] = useAddProductMutation();

  return (
    <CenterInPage>
      <FormWrapper>
        <FormTitle>Add Product</FormTitle>
        <Formik
          initialValues={{
            name: '',
            description: '',
            price: 0,
            productImage: null,
          }}
          validationSchema={addProductSchema}
          onSubmit={async ({ productImage, ...values }, { setSubmitting }) => {
            try {
              console.log(values);
              await addProduct({
                variables: {
                  input: values,
                  productImage,
                },
              });
              router.push('/seller');
              toast.success('Product Added!');
            } catch (error) {
              if (error instanceof Error) {
                toast.error(`Error upgrading account: ${error.message}`);
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, isValid, dirty, errors }) => (
            <Form>
              <FormikInput name="name" type="text" label="Product Name" fullWidth />
              <FormikInput name="description" type="text" label="Description" fullWidth />
              <FormikInput name="price" type="number" label="Price" fullWidth />
              <FormikDropzone name="productImage" label="Product image" />

              <SubmitButton
                loading={isSubmitting}
                disabled={!dirty || !isValid || isSubmitting}
                text="Add Product"
                fullWidth
              />
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </CenterInPage>
  );
};

export default AddProduct;
