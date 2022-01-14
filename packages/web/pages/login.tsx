import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { FormikInput, Layout } from '../components';
import { FormLinks, FormPageWrapper, FormTitle, FormWrapper } from '../components/forms/styles';
import { SubmitButton } from '../components/forms/submit-button';
import { useLoginMutation } from '../graphql/__generated__';
import withApollo from '../lib/withApollo';
import { loginSchema } from '../models/login.form';

const Login: NextPage = () => {
  const [login] = useLoginMutation({
    refetchQueries: ['Me'],
  });

  return (
    <Layout>
      <FormPageWrapper>
        <FormWrapper>
          <FormTitle>Login</FormTitle>
          <Formik
            initialValues={{
              email: 'john@doe.com',
              password: 'johndoe',
            }}
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await login({
                  variables: {
                    input: values,
                  },
                });
              } catch (error) {
                if (error instanceof Error) {
                  toast.error(error.message);
                }
              }
              setSubmitting(false);
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
      </FormPageWrapper>
    </Layout>
  );
};

export default withApollo(Login);
