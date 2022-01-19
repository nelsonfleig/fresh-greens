import { GetStaticProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import { ButtonLink, CenteredLoader, Section, ShopsList } from '../../components';
import DashboardLayout from '../../components/dashboard-layout';
import { Role, useFindMyShopsQuery } from '../../graphql/__generated__';
import { useUser } from '../../hooks/useUser';
import { PageProps } from '../../types';

interface Props {}

const TotalSales = styled.div`
  padding: ${props => props.theme.layout.section};
  color: ${props => props.theme.colors.darkGreen};
  p {
    color: ${props => props.theme.colors.darkGray};
  }
`;

const Dashboard = (props: Props) => {
  const { data, loading } = useFindMyShopsQuery();
  const { user } = useUser();

  if (loading) return <CenteredLoader />;

  const totalSales = data?.shops.reduce((sum, shop) => sum + shop.totalSales, 0);

  return (
    <DashboardLayout>
      <>
        <TotalSales>
          <h2>Hi {user?.firstName}</h2>
          <p>
            Your total sales are: <span>{totalSales} €</span>
          </p>
        </TotalSales>
        <ShopsList
          title="Your shops"
          shops={data?.shops}
          action={<ButtonLink href="/create-shop">+ Create new</ButtonLink>}
        />
      </>
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
