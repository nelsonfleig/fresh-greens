import React from 'react';
import styled from 'styled-components';
import { Container } from '../..';
import { FeaturedItem } from '../featured-item';

interface Props {}

const FeaturedWrapper = styled.div`
  padding: ${props => props.theme.layout.section};
  margin-top: 20px;
  h3 {
    font-size: 18px;
    font-weight: 00;
    color: ${props => props.theme.colors.darkGreen};
    margin-bottom: 10px;
  }
`;

const FeaturedRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const FeaturedList = (props: Props) => {
  return (
    <Container>
      <FeaturedWrapper>
        <h3>Featured Sellers</h3>
        <FeaturedRow>
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
        </FeaturedRow>
      </FeaturedWrapper>
    </Container>
  );
};
