import { OrderItem } from '../graphql/__generated__';
import { CartItem } from '../types';

type ItemType = {
  product: {
    price: number;
  };
  qty: number;
};

export const calculateCartTotal = (items: ItemType[], shipping: number) => {
  return items.length
    ? shipping + items.reduce((sum: number, { product, qty }) => sum + product.price * qty, 0)
    : 0;
};
