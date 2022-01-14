import React from 'react';
import { Loader } from '../../index';
import { StyledButton } from './styles';

interface Props {
  disabled: boolean;
  loading: boolean;
  text?: string;
  fullWidth?: boolean;
}

export const SubmitButton = ({ disabled, loading, text, fullWidth }: Props) => {
  return (
    <StyledButton type="submit" disabled={disabled} fullWidth={fullWidth}>
      {loading ? <Loader /> : text}
    </StyledButton>
  );
};
