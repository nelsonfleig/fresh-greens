import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { CenterInPage, FormikInput } from '../components';
import { FormLinks, FormTitle, FormWrapper } from '../components/forms/styles';
import { SubmitButton } from '../components/forms/submit-button';
import { useRegisterMutation } from '../graphql/__generated__';
import { registerSchema } from '../models/register.form';

const Register: NextPage = () => {
  const router = useRouter();
  const [register] = useRegisterMutation();

  return (
    <CenterInPage>
      <FormWrapper>
        <FormTitle>Create an account</FormTitle>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          validationSchema={registerSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await register({
                variables: {
                  input: values,
                },
              });
              toast.success('Account created. Please login.');
              router.push('/login');
            } catch (error) {
              if (error instanceof Error) {
                toast.error(`Error creating account: ${error.message}`);
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, isValid, errors }) => (
            <Form>
              <FormikInput name="firstName" type="text" label="First name" fullWidth />
              <FormikInput name="lastName" type="text" label="Last name" fullWidth />
              <FormikInput name="email" type="email" label="Email" fullWidth />
              <FormikInput name="password" type="password" label="Password" fullWidth />
              <SubmitButton
                loading={isSubmitting}
                disabled={!isValid || isSubmitting}
                text="Register"
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

export default Register;
