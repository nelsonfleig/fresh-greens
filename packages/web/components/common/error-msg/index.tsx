import React from 'react';
import styled from 'styled-components';
import { flex } from '../../../theme';

interface Props {
  text: string;
}

const ErrorWrapper = styled.div`
  width: 100%;
  ${flex('row', 'center', 'center')}
  padding: 50px 0;
  h3 {
    font-weight: 500;
    font-size: 15px;
  }
`;

export const ErrorMessage = ({ text }: Props) => {
  return (
    <ErrorWrapper>
      <h3>{text}</h3>
    </ErrorWrapper>
  );
};
