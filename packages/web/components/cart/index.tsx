import React from 'react';
import { ButtonLink } from '..';
import { useCart } from '../../context';
import { calculateCartTotal } from '../../lib/calculateCartTotal';
import {
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

// hello
type CartProps = {
  hide?: boolean;
};

export const Cart = ({ hide = false }: CartProps) => {
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
        <ButtonLink href="/checkout">
          Checkout - {calculateCartTotal(cartItems, shipping)} €
        </ButtonLink>
      </CartWrapper>
    </CartColumn>
  ) : null;
};
