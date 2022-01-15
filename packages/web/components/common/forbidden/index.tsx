import React from 'react';
import styled from 'styled-components';
import { flex } from '../../../theme';

const ForbiddenWrapper = styled.div`
  height: 100%;
  ${flex('column', 'center', 'center')}
  color: ${props => props.theme.colors.darkGreen};
`;

export const Forbidden = () => {
  return (
    <ForbiddenWrapper>
      <h2>403</h2>
      <h3>Forbidden</h3>
      <p>You don't have permissions to view this page</p>
    </ForbiddenWrapper>
  );
};
