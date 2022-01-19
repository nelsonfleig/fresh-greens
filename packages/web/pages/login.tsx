import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { CenterInPage, FormikInput } from '../components';
import { FormLinks, FormTitle, FormWrapper } from '../components/forms/styles';
import { SubmitButton } from '../components/forms/submit-button';
import { MeDocument, useLoginMutation } from '../graphql/__generated__';
import { loginSchema } from '../models/login.form';

const Login: NextPage = () => {
  const [login] = useLoginMutation({
    refetchQueries: [MeDocument],
  });
  const router = useRouter();

  return (
    <CenterInPage>
      <FormWrapper>
        <FormTitle>Login</FormTitle>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const { data } = await login({
                variables: {
                  input: values,
                },
              });

              if (data?.login.user.isSeller) {
                router.push('/dashboard');
              } else {
                router.push('/');
              }
            } catch (error) {
              if (error instanceof Error) {
                toast.error(error.message);
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <FormikInput name="email" type="email" label="Email" fullWidth />
              <FormikInput name="password" type="password" label="Password" fullWidth />
              <SubmitButton
                loading={isSubmitting}
                disabled={!isValid || isSubmitting}
                text="Login"
                fullWidth
              />
            </Form>
          )}
        </Formik>
        <FormLinks>
          <Link href="/register">
            <a>Don't have an account?</a>
          </Link>

          <Link href="/reset-password">
            <a>Reset your password</a>
          </Link>
        </FormLinks>
      </FormWrapper>
    </CenterInPage>
  );
};

export default Login;
