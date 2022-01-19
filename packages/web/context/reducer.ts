import { ICartState, IFluxAction } from '../types';
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from './actionTypes';

export const cartReducer = (state: ICartState, action: IFluxAction): ICartState => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cartItems.some(({ product }) => product.id === action.payload.id)) {
        return {
          ...state,
          cartItems: state.cartItems.map(({ product, qty }) => {
            if (product.id === action.payload.id) {
              return {
                product,
                qty: qty + 1,
              };
            }
            return { product, qty };
          }),
        };
      } else {
        return {
          ...state,
          shop: action.payload.shop.id,
          cartItems: [...state.cartItems, { product: action.payload, qty: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(({ product }) => product.id !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        shop: '',
        cartItems: [],
      };
    default:
      return state;
  }
};
