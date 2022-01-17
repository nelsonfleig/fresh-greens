import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { CenterInPage, FormikInput } from '../components';
import { FormikDropzone } from '../components/forms/formik-dropzone';
import { FormLinks, FormTitle, FormWrapper } from '../components/forms/styles';
import { SubmitButton } from '../components/forms/submit-button';
import { MeDocument, useUpgradeToSellerMutation } from '../graphql/__generated__';
import { upgradeSellerSchema } from '../models/upgrade-seller.form';

const RegisterSeller: NextPage = () => {
  const router = useRouter();
  const [upgradeToSeller] = useUpgradeToSellerMutation({
    refetchQueries: [MeDocument],
  });

  return (
    <CenterInPage>
      <FormWrapper>
        <FormTitle>Upgrade to Seller</FormTitle>
        <Formik
          initialValues={{
            sellerName: '',
            address: '',
            city: '',
            sellerImage: null,
          }}
          validationSchema={upgradeSellerSchema}
          onSubmit={async ({ sellerImage, ...values }, { setSubmitting }) => {
            try {
              await upgradeToSeller({
                variables: {
                  input: values,
                  sellerImage,
                },
              });
              router.push('/seller');
              toast.success('Seller account upgraded!');
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
              <FormikInput name="sellerName" type="text" label="Seller Name" fullWidth />
              <FormikInput name="address" type="text" label="Address" fullWidth />
              <FormikInput name="city" type="text" label="City" fullWidth />
              <FormikDropzone name="sellerImage" label="Seller image" />

              <SubmitButton
                loading={isSubmitting}
                disabled={!dirty || !isValid || isSubmitting}
                text="Upgrade Account"
                fullWidth
              />
            </Form>
          )}
        </Formik>
        <FormLinks>
          <Link href="/login">
            <a>Already have an account?</a>
          </Link>
          <Link href="/register">
            <a>Reset your password</a>
          </Link>
        </FormLinks>
      </FormWrapper>
    </CenterInPage>
  );
};

export default RegisterSeller;
