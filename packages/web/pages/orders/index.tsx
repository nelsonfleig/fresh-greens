import React from 'react';
import styled from 'styled-components';
import { CenteredLoader, Container, Section } from '../../components';
import { useFindMyOrdersQuery } from '../../graphql/__generated__';
import { FaEye } from 'react-icons/fa';
import { format } from 'date-fns';
import Link from 'next/link';

const MyOrdersWrapper = styled.div`
  box-shadow: ${props => props.theme.styles.boxShadow};
  background: white;
  padding: 20px;
  overflow: hidden;
  h2 {
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme.colors.darkGreen};
    margin-bottom: 20px;
  }
`;

const MyOrdersTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-radius: ${props => props.theme.styles.borderRadius};
  td,
  th {
    border: 1px solid #ddd;
    padding: 4px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${props => props.theme.colors.lightGreen};
    color: white;
    text-align: center;
  }

  td {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .details {
    svg {
      display: block;
      margin: 0 auto;
      cursor: pointer;
      color: ${props => props.theme.colors.darkGreen};
    }
  }
`;

const NoOrders = styled.p`
  text-align: center;
  padding: 20px;
`;

const MyOrders = () => {
  const { data, loading } = useFindMyOrdersQuery();

  if (loading || !data) return <CenteredLoader />;

  const { orders } = data;

  return (
    <Container>
      <Section>
        <MyOrdersWrapper>
          <h2>My Orders</h2>
          <MyOrdersTable>
            <tr>
              <th>Order No</th>
              <th>Company</th>
              <th>Date</th>
              <th>Total</th>
              <th>Details</th>
            </tr>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.shop.name}</td>
                <td>{format(new Date(order.createdAt), 'dd-MM-yyyy')}</td>
                <td>{order.total} €</td>
                <td className="details">
                  <Link href={`/orders/${order.id}`}>
                    <a>
                      <FaEye size={20} />
                    </a>
                  </Link>
                </td>
              </tr>
            ))}
          </MyOrdersTable>
          {!orders.length && <NoOrders>You have no orders</NoOrders>}
        </MyOrdersWrapper>
      </Section>
    </Container>
  );
};

export default MyOrders;
