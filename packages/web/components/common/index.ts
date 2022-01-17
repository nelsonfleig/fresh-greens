import styled from 'styled-components';
import { flex } from '../../theme';

// Export other components in subfolders
export * from './fullpage-loader';
export * from './forbidden';

// General Purpose Styled Components
export const CenterInPage = styled.div`
  height: 100%;
  ${flex('column', 'center', 'center')}
`;

type LoaderProps = {
  size?: 'lg' | 'sm';
  rgb?: string;
};

export const Loader = styled.div<LoaderProps>`
  border-radius: 50%;
  /* width: 24px; */
  width: ${props => (props.size === 'lg' ? '48px' : '24px')};
  height: ${props => (props.size === 'lg' ? '48px' : '24px')};
  border: 0.25rem solid
    ${props => (props.rgb && `rgba(${props.rgb}, 0.2)`) || `rgba(255,255,255, 0.2)`};
  border-top-color: ${props => (props.rgb && `rgb(${props.rgb})`) || 'rgb(255, 255, 255)'};
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
