import { useRouter } from 'next/router';
import React from 'react';
import { CenteredLoader } from '../../components';
import { ShopProfile } from '../../components/shop/profile';
import { useFindShopBySlugQuery } from '../../graphql/__generated__';

interface Props {}

const ShopPage = (props: Props) => {
  const router = useRouter();
  const slug = router.query.slug as string;

  const { data, loading } = useFindShopBySlugQuery({
    variables: { slug },
  });

  if (loading) return <CenteredLoader />;

  return <ShopProfile shop={data?.shop} />;
};

export default ShopPage;
