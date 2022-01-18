import React from 'react';
import styled from 'styled-components';
import { ButtonLink } from '../../..';
import { ShopFragmentFragment } from '../../../../graphql/__generated__';
import { flex } from '../../../../theme';
import { ShopItem } from '../shop-item';

interface Props {
  shops?: ShopFragmentFragment[];
  title: string;
  action?: JSX.Element;
}

const ShopsWrapper = styled.div`
  padding: ${props => props.theme.layout.section};
  margin-top: 20px;
`;

const ShopsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  gap: 10px;
`;

const ShopsListHeader = styled.div`
  ${flex('row', 'space-between', 'center')};
  margin-bottom: 5px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.darkGreen};
  }
`;

export const ShopsList = ({ shops, title, action }: Props) => {
  return (
    <ShopsWrapper>
      <ShopsListHeader>
        <h3>{title}</h3>
        {action}
      </ShopsListHeader>

      <ShopsGrid>
        {shops?.map(shop => (
          <ShopItem shop={shop} />
        ))}
      </ShopsGrid>
    </ShopsWrapper>
  );
};
