import styled from 'styled-components';
import { flex } from '../../../theme';

export const FormGroup = styled.div<{ fullWidth: boolean }>`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  ${flex('column', 'center', 'flex-start')}
  margin-bottom: 20px;
`;

export const Label = styled.label`
  align-self: flex-start;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.darkGreen};
`;

export const FormInputField = styled.input<{ error: boolean }>`
  border: ${props => (props.error ? '1px solid red' : '1px solid #ccc')};
  padding: 13px 10px;
  border-radius: ${props => props.theme.styles.borderRadius};
  width: 100%;
  font-size: 16px;
`;

export const FormikFieldError = styled.span`
  margin-top: 4px;
  font-size: 12px;
  color: red;
`;
