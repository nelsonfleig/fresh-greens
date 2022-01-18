import { GetStaticProps } from 'next';
import React from 'react';
import { ButtonLink, CenteredLoader, ShopsList } from '../../components';
import DashboardLayout from '../../components/dashboard-layout';
import { Role, useFindMyShopsQuery } from '../../graphql/__generated__';
import { PageProps } from '../../types';

interface Props {}

const Dashboard = (props: Props) => {
  const { data, loading } = useFindMyShopsQuery();

  if (loading) return <CenteredLoader />;

  return (
    <DashboardLayout>
      <ShopsList
        title="Your shops"
        shops={data?.shops}
        action={<ButtonLink href="/create-shop">+ Create new</ButtonLink>}
      />
    </DashboardLayout>
  );
};

export const getStaticProps: GetStaticProps<PageProps, {}> = async context => {
  return {
    props: {
      protected: true,
      roles: [Role.Seller],
    },
  };
};

export default Dashboard;
