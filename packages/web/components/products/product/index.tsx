import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../..';
import { ProductFragmentFragment } from '../../../graphql/__generated__';
import { flex } from '../../../theme';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../../../context';

interface Props {
  product: ProductFragmentFragment;
  hideActions?: boolean;
}

const ProductItemWrapper = styled.div`
  position: relative;
  ${flex('row', 'flex-start', 'flex-start')}
  padding: ${props => props.theme.layout.section};
  border-bottom: 1px solid #ccc;
`;

const ProductTitle = styled.h4`
  color: ${props => props.theme.colors.darkGreen};
  font-size: 18px;
  font-weight: 600;
`;

const ProductDescription = styled.p`
  color: ${props => props.theme.colors.darkGray};
  font-size: 15px;
`;

const ProductPrice = styled.span`
  display: block;
  margin-bottom: 20px;
`;

const ProductInfo = styled.div`
  margin-left: 20px;
`;

export const ProductItem = ({ product, hideActions = false }: Props) => {
  const { addToCart } = useCart();

  return (
    <ProductItemWrapper>
      <Image src={product.imageUrl} width={150} height={150} objectFit="cover" />
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>{product.price} € / kg</ProductPrice>
        {!hideActions && (
          <Button
            color="primary"
            onClick={() => {
              addToCart(product);
            }}
          >
            <FaCartPlus /> Add to Cart
          </Button>
        )}
      </ProductInfo>
    </ProductItemWrapper>
  );
};
