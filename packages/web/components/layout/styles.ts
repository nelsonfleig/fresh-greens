import styled from 'styled-components';
import { flex } from '../../theme';

export const Main = styled.main`
  min-height: calc(100% - 80px);
  width: 100%;
  flex-grow: 1;
  background: ${props => props.theme.colors.offWhite};
`;

export const LayoutWrapper = styled.div`
  height: 100%;
  ${flex('column', 'flex-start', 'stretch')}
`;
