import React from 'react';
import styled from 'styled-components';
import { Container } from '..';

interface Props {
  children: JSX.Element;
}

const DashboardTitle = styled.h2`
  color: ${props => props.theme.colors.darkGreen};
`;

const DashboardHead = styled.div`
  padding: ${props => props.theme.layout.section};
`;

const DashboardLayout = ({ children }: Props) => {
  return (
    <Container>
      <DashboardHead>
        <DashboardTitle>Your Dashboard</DashboardTitle>
      </DashboardHead>
      {children}
    </Container>
  );
};

export default DashboardLayout;
