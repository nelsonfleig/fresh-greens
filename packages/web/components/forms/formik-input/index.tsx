import { FieldHookConfig, FieldInputProps, useField } from 'formik';
import React from 'react';
import { FormGroup, FormikFieldError, FormInputField, Label } from './styles';

interface FormikInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  fullWidth?: boolean;
}

export const FormikInput = ({ label, ...props }: FormikInputProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <FormGroup fullWidth>
      <Label>{label}</Label>
      <FormInputField
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
      ></FormInputField>
      <FormikFieldError>{meta.touched && meta.error}</FormikFieldError>
    </FormGroup>
  );
};
