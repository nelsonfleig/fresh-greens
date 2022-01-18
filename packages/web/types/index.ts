import { ProductFragmentFragment, Role } from '../graphql/__generated__';

export type PageProps = {
  protected?: boolean;
  roles?: Role[];
};

export type CartItem = {
  product: ProductFragmentFragment;
  qty: number;
};

export interface ICartState {
  cartItems: CartItem[];
  shipping: number;
  addToCart: (product: ProductFragmentFragment) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export type IFluxAction = {
  type: string;
  payload?: any;
};
