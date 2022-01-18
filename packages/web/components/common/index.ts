import styled from 'styled-components';
import { flex } from '../../theme';

// Export other components in subfolders
export * from './fullpage-loader';
export * from './centered-loader';
export * from './forbidden';

// General Purpose Styled Components
export const CenterInPage = styled.div`
  min-height: calc(100vh - 80px);
  ${flex('column', 'center', 'center')}
`;

export const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: ${props => props.theme.layout.maxWidth};
`;

type LoaderProps = {
  size?: 'lg' | 'sm';
};

export const Loader = styled.div<LoaderProps>`
  border-radius: 50%;
  /* width: 24px; */
  width: ${props => (props.size === 'lg' ? '48px' : '24px')};
  height: ${props => (props.size === 'lg' ? '48px' : '24px')};
  border: 0.25rem solid rgba(38, 70, 83, 0.2);
  border-top-color: rgb(38, 70, 83);
  animation: spin 1s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonLink = styled.a`
  display: block;
  background: ${props => props.theme.colors.red};
  padding: 7px 20px;
  color: white;
  border-radius: ${props => props.theme.styles.borderRadius};
  box-shadow: ${props => props.theme.styles.boxShadow};
  transition: ${props => props.theme.styles.transition};
  text-align: center;
  &:hover {
    background: ${props => props.theme.colors.redHover};
    cursor: pointer;
  }
`;

type ButtonProps = {
  color: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonProps>`
  display: block;
  background: ${props =>
    props.color === 'primary' ? props.theme.colors.lightGreen : props.theme.colors.red};
  padding: 7px 20px;
  color: white;
  border-radius: ${props => props.theme.styles.borderRadius};
  box-shadow: ${props => props.theme.styles.boxShadow};
  transition: ${props => props.theme.styles.transition};
  border: none;
  ${flex('row', 'center', 'center')}
  svg {
    margin-right: 10px;
  }
  &:hover {
    background: ${props =>
      props.color === 'primary' ? props.theme.colors.lightGreenHover : props.theme.colors.redHover};
    cursor: pointer;
  }
`;
