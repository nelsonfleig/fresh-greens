import styled from 'styled-components';
import { flex } from '../../theme';

// Generic form styles

export const FormPageWrapper = styled.div`
  height: 100%;
  ${flex('column', 'center', 'center')}
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
