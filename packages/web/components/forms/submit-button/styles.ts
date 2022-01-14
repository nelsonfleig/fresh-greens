import styled from 'styled-components';
import { flex } from '../../../theme';

export const StyledButton = styled.button<{ fullWidth?: boolean }>`
  min-width: 100px;
  width: ${props => (props.fullWidth ? '100%' : 'fit-content')};
  padding: 14px 24px;
  border: none;
  font-size: 16px;
  box-shadow: ${props => props.theme.styles.boxShadow};
  border-radius: ${props => props.theme.styles.borderRadius};
  background: ${props => props.theme.colors.red};
  color: white;
  align-self: flex-end;
  ${flex('row', 'center', 'center')};
  transition: ${props => props.theme.styles.transition};
  &:hover {
    background: ${props => props.theme.colors.redHover};
    cursor: pointer;
  }
`;
