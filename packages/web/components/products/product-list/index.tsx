import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { ButtonLink } from '../..';
import { FindShopBySlugQuery, Role, ShopFragmentFragment } from '../../../graphql/__generated__';
import { flex } from '../../../theme';
import { ErrorMessage } from '../../common/error-msg';
import { RestrictAccess } from '../../common/restrict-access';
import { ProductItem } from '../product';

interface Props {
  shop: ShopFragmentFragment | FindShopBySlugQuery['shop'];
  hideActions?: boolean;
}

const ProductListTitle = styled.h3`
  color: ${props => props.theme.colors.darkGreen};
  font-size: 18px;
  font-weight: 600;
`;

const ProductListHeader = styled.div`
  ${flex('row', 'space-between', 'center')}
`;

const ProductItems = styled.div``;

const ProductList = ({ shop, hideActions = false }: Props) => {
  return (
    <div>
      <ProductListHeader>
        <ProductListTitle>Products</ProductListTitle>
        <RestrictAccess roles={[Role.Seller]} ownerId={shop?.user.id}>
          <Link href={`/shops/${shop.slug}/add-product`}>
            <ButtonLink>+ Add Product</ButtonLink>
          </Link>
        </RestrictAccess>
      </ProductListHeader>
      {!shop?.products || !shop?.products.length ? (
        <ErrorMessage text="No products to show" />
      ) : (
        <ProductItems>
          {shop.products.map(product => (
            <ProductItem key={product.id} product={product} hideActions={hideActions} />
          ))}
        </ProductItems>
      )}
    </div>
  );
};

export default ProductList;
