import { createContext, useContext, useReducer } from 'react';
import { ProductFragmentFragment } from '../graphql/__generated__';
import { ICartState } from '../types';
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from './actionTypes';
import { cartReducer } from './reducer';

const INITIAL_STATE: ICartState = {
  cartItems: [],
  shop: '',
  shipping: 5,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
};

const CartContext = createContext<ICartState>(INITIAL_STATE);

type CartProviderProps = {
  children: JSX.Element;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addToCart = (product: ProductFragmentFragment) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
