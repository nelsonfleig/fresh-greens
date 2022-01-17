import { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Loader } from '../../components';
import { ProductItem } from '../../components/common/product';
import { SellerProfile } from '../../components/seller/profile';
import { useFindProductsBySellerIdLazyQuery } from '../../graphql/__generated__';
import { useUser } from '../../hooks/useUser';

const SellerHome: NextPage = () => {
  const { user } = useUser();
  const [fetchProducts, { data, loading }] = useFindProductsBySellerIdLazyQuery();

  useEffect(() => {
    (async () => {
      if (user) {
        await fetchProducts({
          variables: {
            sellerId: user.id,
          },
        });
      }
    })();
  }, [user]);

  if (loading) return <Loader />;

  return (
    user && (
      <div>
        <SellerProfile seller={user} />
        <Link href="/seller/add-product">Add product</Link>
        <div>
          {data?.findProductsBySellerId.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    )
  );
};

export default SellerHome;
