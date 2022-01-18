import { CartItem } from '../types';

export const calculateCartTotal = (cartItems: CartItem[], shipping: number) => {
  return cartItems.length
    ? shipping + cartItems.reduce((sum, { product, qty }) => sum + product.price * qty, 0)
    : 0;
};
