import React from 'react';
import styled from 'styled-components';
import { Loader } from '..';
import { Layout } from '../..';
import { flex } from '../../../theme';

const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100%;
  ${flex('row', 'center', 'center')}
`;

export const FullPageLoader = () => {
  return (
    <LoaderWrapper>
      <Loader size="lg" rgb="38, 70, 83" />
    </LoaderWrapper>
  );
};

export default FullPageLoader;
