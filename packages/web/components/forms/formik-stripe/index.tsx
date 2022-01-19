import { FieldHookConfig, useField, useFormikContext } from 'formik';
import React from 'react';
import { FormGroup, FormikFieldError, FormLabel } from '../styles';
import { CardElement } from '@stripe/react-stripe-js';
import styled from 'styled-components';

interface FormikStripeProps {
  label?: string;
}

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#87bbfd',
      },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
};

const StripeField = styled.fieldset`
  border: none;
  display: block;
  margin-bottom: 20px;
`;

const FieldWrapper = styled.div`
  padding: 10px 0;
`;

export const FormikStripe = ({ label, ...props }: FormikStripeProps & FieldHookConfig<string>) => {
  const { setFieldValue, setFieldError } = useFormikContext();
  const [field, meta] = useField(props);

  return (
    <StripeField>
      <FormLabel>{label}</FormLabel>
      <FieldWrapper>
        <CardElement
          onChange={e => {
            if (e.error) {
              setFieldError('stripeComplete', e.error.message);
            }
            setFieldValue('stripeComplete', e.complete);
          }}
        />
      </FieldWrapper>
      <FormikFieldError>{meta.touched && meta.error}</FormikFieldError>
    </StripeField>
  );
};
