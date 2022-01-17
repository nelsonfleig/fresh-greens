import { FieldHookConfig, useField, useFormikContext } from 'formik';
import React from 'react';
import { FormGroup, FormikFieldError, FormLabel } from '../styles';
import { FileWrapper, FileButton, FileName } from './styles';

type FormikDropzoneProps = FieldHookConfig<string> & {
  label?: string;
  icon?: JSX.Element;
};

export const FormikDropzone = ({ label, icon, ...props }: FormikDropzoneProps): JSX.Element => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  return (
    <FormGroup fullWidth>
      <FormLabel>{label}</FormLabel>
      <FileWrapper>
        <FileButton>
          Choose file
          <input
            type="file"
            onChange={e => {
              if (e.currentTarget && e.currentTarget.files) {
                setFieldValue(field.name, e.currentTarget.files[0]);
              }
            }}
            accept="image/*"
            hidden
          />
        </FileButton>
        <FileName>{field.value && (field.value as unknown as File).name}</FileName>
      </FileWrapper>
      <FormikFieldError>{meta.touched && meta.error}</FormikFieldError>
    </FormGroup>
  );
};
