import styled from 'styled-components';
import { flex } from '../../theme';

// Generic form styles

export const FormGroup = styled.div<{ fullWidth: boolean }>`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  ${flex('column', 'center', 'flex-start')}
  margin-bottom: 20px;
`;

export const FormikFieldError = styled.span`
  margin-top: 4px;
  font-size: 12px;
  color: red;
`;

export const FormLabel = styled.label`
  align-self: flex-start;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.darkGreen};
`;

export const FormWrapper = styled.div`
  border: 1px solid red;
  background: white;
  padding: 24px;
  border-radius: 5px;
  box-shadow: ${props => props.theme.styles.boxShadow};
  border: 1px solid #eee;
  width: 100%;
  max-width: 450px;
  form {
    ${flex('column', 'center', 'center')}

    margin-bottom: 20px;
  }
`;

export const FormLinks = styled.div`
  text-align: center;
  font-size: 14px;
  a {
    display: block;
    color: ${props => props.theme.colors.darkGray};
    transition: ${props => props.theme.styles.transition};
    &:hover {
      color: ${props => props.theme.colors.darkGreen};
    }
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.darkGreen};
`;
