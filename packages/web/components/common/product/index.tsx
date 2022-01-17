import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Product } from '../../../graphql/__generated__';

interface Props {
  product: Product;
}

const ProductItemWrapper = styled.div`
  width: 250px;
  position: relative;
  border: 1px solid red;
`;

const ProductTitle = styled.h4``;

const ProductDescription = styled.p``;

const ProductPrice = styled.span`
  display: block;
`;

export const ProductItem = ({ product }: Props) => {
  return (
    <ProductItemWrapper>
      <Image src={product.imageUrl} width={200} height={200} objectFit="cover" />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price} € / kg</ProductPrice>
    </ProductItemWrapper>
  );
};
