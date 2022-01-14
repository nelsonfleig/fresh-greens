import { NextPage } from 'next';
import { FormEventHandler, useState } from 'react';
import withApollo from '../lib/withApollo';
import { useLoginMutation } from '../graphql/__generated__';
import { Form, Formik } from 'formik';
import { Layout } from '../components';
import { FormikInput } from '../components';
import { loginSchema } from '../models/login.form';
import { FormLinks, FormPageWrapper, FormTitle, FormWrapper } from '../components/forms/styles';
import { SubmitButton } from '../components/forms/submit-button';
import Link from 'next/link';

const Login: NextPage = () => {
  return (
    <Layout>
      <FormPageWrapper>
        <FormWrapper>
          <FormTitle>Create an account</FormTitle>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              console.log(values);
            }}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <FormikInput name="email" type="email" label="Email" fullWidth />
                <FormikInput name="password" type="password" label="Password" fullWidth />
                <SubmitButton loading={isSubmitting} disabled={isValid} text="Login" fullWidth />
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
      </FormPageWrapper>
    </Layout>
  );
};

export default withApollo(Login);
