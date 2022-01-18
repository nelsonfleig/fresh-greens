import React, { useState } from 'react';
import { Button, ButtonLink } from '..';
import { useCart } from '../../context';
import { calculateCartTotal } from '../../lib/calculateCartTotal';
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
import { FaTimesCircle } from 'react-icons/fa';
import { CheckoutForm } from '../checkout-form';
import { StripeProvider } from '../../lib/stripe';
import Modal from '../modal';

// hello
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
            </>
          )}
        </CartItems>
        <Button fullWidth onClick={() => setShowModal(true)}>
          <CartCheckoutText>Checkout</CartCheckoutText> {calculateCartTotal(cartItems, shipping)} €
        </Button>
      </CartWrapper>

      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <CheckoutForm />
      </Modal>
    </CartColumn>
  ) : null;
};
