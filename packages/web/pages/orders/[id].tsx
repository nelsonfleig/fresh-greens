import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { CenteredLoader, Container, Section } from '../../components';
import {
  AddressInfo,
  OrderDetailsWrapper,
  OrderSeller,
  OrderTotal,
  ProductsSummary,
  ProductSummaryItem,
} from '../../components';
import { useFindOneOrderQuery } from '../../graphql/__generated__';
import { calculateCartTotal } from '../../lib/calculateCartTotal';

interface Props {}

const Order = (props: Props) => {
  const router = useRouter();
  const { data, loading } = useFindOneOrderQuery({
    variables: {
      id: router.query.id as string,
    },
  });

  if (loading || !data) return <CenteredLoader />;

  const { order } = data;

  return (
    <Container>
      <Section>
        <OrderDetailsWrapper>
          <h2>OrderConfirmation</h2>
          <OrderSeller>
            <Image src={order.shop.imageUrl} width={150} height={150} objectFit="cover" />
            <h4>{order.shop.name}</h4>
            <h5>Order No. #{order.id}</h5>
          </OrderSeller>
          <AddressInfo>
            <h4>Delivery Address</h4>
            <p>
              {order.user.firstName} {order.user.lastName} <br />
              {order.address}, <br />
              {order.zipCode} {order.city}
            </p>
          </AddressInfo>
          <ProductsSummary>
            {order.orderItems.map(({ product, qty }) => (
              <ProductSummaryItem>
                <p>
                  {qty}x {product.name}
                </p>
                <p>{qty * product.price} €</p>
              </ProductSummaryItem>
            ))}
            <ProductSummaryItem>
              <p>Shipping</p>
              <p>5 €</p>
            </ProductSummaryItem>
            <OrderTotal>
              <p>Order Total</p>
              <p>{calculateCartTotal(order.orderItems, 5)} €</p>
            </OrderTotal>
          </ProductsSummary>
        </OrderDetailsWrapper>
      </Section>
    </Container>
  );
};

export default Order;
