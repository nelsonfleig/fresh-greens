import { Form, Formik } from 'formik';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { CenterInPage, FormikInput } from '../components';
import { FormikDropzone } from '../components/forms/formik-dropzone';
import { FormTitle, FormWrapper } from '../components/forms/styles';
import { SubmitButton } from '../components/forms/submit-button';
import { MeDocument, Role, useCreateShopMutation } from '../graphql/__generated__';
import { useUser } from '../hooks/useUser';
import { createShopSchema } from '../models/create-shop.form';
import { PageProps } from '../types';

const RegisterSeller: NextPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const [createShop] = useCreateShopMutation({
    refetchQueries: [MeDocument],
  });

  return (
    <CenterInPage>
      <FormWrapper>
        <FormTitle>Create your Shop</FormTitle>
        <Formik
          initialValues={{
            name: '',
            address: '',
            zipCode: '',
            city: '',
            shopImage: null,
          }}
          validationSchema={createShopSchema}
          onSubmit={async ({ shopImage, ...values }, { setSubmitting }) => {
            try {
              const shop = await createShop({
                variables: {
                  input: values,
                  shopImage,
                },
              });
              router.push(`/shops/${shop.data?.createShop.slug}`);
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
          {({ isSubmitting, isValid, dirty }) => (
            <Form>
              <FormikInput name="name" type="text" label="Shop Name" fullWidth />
              <FormikInput name="address" type="text" label="Address" fullWidth />
              <FormikInput name="zipCode" type="text" label="Zip Code" fullWidth />
              <FormikInput name="city" type="text" label="City" fullWidth />
              <FormikDropzone name="shopImage" label="Shop image" />

              <SubmitButton
                loading={isSubmitting}
                disabled={!dirty || !isValid || isSubmitting}
                text="Create Shop"
                fullWidth
              />
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </CenterInPage>
  );
};

export const getStaticProps: GetStaticProps<PageProps, {}> = async context => {
  return {
    props: {
      protected: true,
      roles: [Role.User],
    },
  };
};
export default RegisterSeller;
