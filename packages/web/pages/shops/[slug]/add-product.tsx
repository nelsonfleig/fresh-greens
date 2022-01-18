import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { CenterInPage, FormikInput } from '../../../components';
import { FormikDropzone } from '../../../components/forms/formik-dropzone';
import { FormTitle, FormWrapper } from '../../../components/forms/styles';
import { SubmitButton } from '../../../components/forms/submit-button';
import {
  FindShopBySlugDocument,
  useCreateProductMutation,
  useFindShopBySlugQuery,
} from '../../../graphql/__generated__';
import { addProductSchema } from '../../../models/add-product.form';

const AddProduct: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { data } = useFindShopBySlugQuery({
    variables: { slug },
  });
  const [createProduct] = useCreateProductMutation({
    refetchQueries: [FindShopBySlugDocument],
  });

  return (
    <CenterInPage>
      <FormWrapper>
        <FormTitle>Add Product</FormTitle>
        <Formik
          initialValues={{
            name: '',
            description: '',
            price: 0,
            unit: '',
            productImage: null,
          }}
          validationSchema={addProductSchema}
          onSubmit={async ({ productImage, ...values }, { setSubmitting }) => {
            try {
              console.log(values);
              await createProduct({
                variables: {
                  input: {
                    ...values,
                    shop: data!.shop.id,
                  },
                  productImage,
                },
              });
              router.back();
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
          {({ isSubmitting, isValid, dirty }) => (
            <Form>
              <FormikInput name="name" type="text" label="Product Name" fullWidth />
              <FormikInput name="description" type="text" label="Description" fullWidth />
              <FormikInput name="price" type="number" label="Price" fullWidth />
              <FormikInput
                name="unit"
                type="text"
                label="Unit"
                placeholder="ie. kg, package, item..."
                fullWidth
              />
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
