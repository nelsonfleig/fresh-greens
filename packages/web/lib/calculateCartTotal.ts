import { CartItem } from '../types';

export const calculateCartTotal = (cartItems: CartItem[]) => {
  return cartItems.reduce((sum, { product, qty }) => sum + product.price * qty, 0);
};
