import Image from 'next/image';
import React from 'react';
import { CenteredLoader, Container } from '../..';
import { FindShopBySlugQuery } from '../../../graphql/__generated__';
import { useUser } from '../../../hooks/useUser';
import { Cart } from '../../cart';
import ProductList from '../../products/product-list';
import {
  SellerImageContainer,
  SellerInfo,
  SellerInfoContent,
  SellerPageLayout,
  SellerProfileWrapper,
} from './styles';

interface Props {
  shop?: FindShopBySlugQuery['shop'];
}

export const ShopProfile = ({ shop }: Props) => {
  const { user } = useUser();

  const isOwner = () => shop?.user.id === user?.id;

  if (!shop) return <CenteredLoader />;
  return (
    <Container>
      <SellerPageLayout>
        <SellerProfileWrapper>
          <SellerInfo>
            <SellerImageContainer>
              <Image src={shop.imageUrl!} width={120} height={120} objectFit="cover" />
            </SellerImageContainer>
            <SellerInfoContent>
              <h2>{shop.name}</h2>
              <p>
                {shop.address} items in Stock <br />
                {shop.zipCode} {shop.city}
              </p>
              <span>{shop.products?.length} items in Stock</span>
            </SellerInfoContent>
          </SellerInfo>
          <ProductList shop={shop} hideActions={isOwner()} />
        </SellerProfileWrapper>
        <Cart hide={isOwner()} />
      </SellerPageLayout>
    </Container>
  );
};
