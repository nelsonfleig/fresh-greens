import React, { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Button } from '..';
import { useCart } from '../../context';
import { useUser } from '../../hooks/useUser';
import { calculateCartTotal } from '../../lib/calculateCartTotal';
import { StripeProvider } from '../../lib/stripe';
import { CheckoutForm } from '../checkout-form';
import Modal from '../modal';
import {
  CartCheckoutText,
  CartColumn,
  CartEmptyMsg,
  CartItem,
  CartItems,
  CartRemove,
  CartShippingInfo,
  CartTitle,
  CartWrapper,
} from './styles';

type CartProps = {
  hide?: boolean;
};

export const Cart = ({ hide = false }: CartProps) => {
  const [showModal, setShowModal] = useState(false);

  const { cartItems, shipping, removeFromCart } = useCart();

  return !hide ? (
    <CartColumn>
      <CartWrapper>
        <CartTitle>Your Cart</CartTitle>
        <CartItems>
          {cartItems.length === 0 ? (
            <CartEmptyMsg>Your cart is empty</CartEmptyMsg>
          ) : (
            <>
              {cartItems.map(({ product, qty }) => (
                <CartItem key={product.id}>
                  <span>{qty}x</span>
                  <h4>{product.name}</h4>
                  <p>
                    {product.price} €/{product.unit}
                  </p>
                  <CartRemove onClick={() => removeFromCart(product.id)}>
                    <FaTimesCircle />
                  </CartRemove>
                </CartItem>
              ))}
              <CartShippingInfo>
                <span>Shipping</span>
                <span>+ {shipping} €</span>
              </CartShippingInfo>
              <Button fullWidth onClick={() => setShowModal(true)}>
                <CartCheckoutText>Checkout</CartCheckoutText>{' '}
                {calculateCartTotal(cartItems, shipping)} €
              </Button>
            </>
          )}
        </CartItems>
      </CartWrapper>

      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <StripeProvider>
          <CheckoutForm />
        </StripeProvider>
      </Modal>
    </CartColumn>
  ) : null;
};
