import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { ShopFragmentFragment } from '../../../../graphql/__generated__';
import { flex } from '../../../../theme';

interface Props {
  shop: ShopFragmentFragment;
}

const ShopItemWrapper = styled.div`
  flex: 1 0 45%;
  overflow: hidden;
  border-radius: ${props => props.theme.styles.borderRadius};

  transition: ${props => props.theme.styles.transition};
  box-shadow: ${props => props.theme.styles.boxShadow};
  &:hover {
    transform: scale(1.03);
  }
  @media screen and (min-width: 800px) {
    flex: 1 0 30%;
  }
`;

const ShopItemImage = styled.div`
  height: 168px;
  position: relative;
  z-index: 10;
`;

const ShopItemInfo = styled.div`
  padding: 10px;
  background: white;
  p {
    text-align: center;
    color: ${props => props.theme.colors.darkGray};
  }
`;

const ShopItemOverlay = styled.div`
  background: black;
  opacity: 0.3;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const ShopNameWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  ${flex('row', 'center', 'center')};
  h4 {
    font-size: 25px;
    font-weight: 600;
    color: white;
    text-shadow: 0 1px 4px rgb(0 0 0 / 60%);
  }
`;

export const ShopItem = ({ shop }: Props) => {
  return (
    <ShopItemWrapper>
      <Link href={`/shops/${shop.slug}`}>
        <a>
          <ShopItemImage>
            <Image src={shop.imageUrl} layout="fill" objectFit="cover" objectPosition="center" />
            <ShopItemOverlay></ShopItemOverlay>
            <ShopNameWrapper>
              <h4>{shop.name}</h4>
            </ShopNameWrapper>
          </ShopItemImage>
          <ShopItemInfo>
            <p>
              {shop.address}, {shop.zipCode} {shop.city}
            </p>
          </ShopItemInfo>
        </a>
      </Link>
    </ShopItemWrapper>
  );
};
