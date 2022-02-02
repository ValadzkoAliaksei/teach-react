import { TYPES } from '../action-types';
import { initialProductsState } from './initial-state';

export const productsReducer = (prevState, action) => {
  switch (action.type) {
    case TYPES.BUY_PRODUCTS: {
      const { productId, value, sumCost } = action.payload;
      return {
        ...prevState,
        [productId]: {
          value: prevState[productId].value + value,
          sumCost: prevState[productId].sumCost + sumCost,
        },
        sum: prevState.sum + sumCost,
      };
    }
    case TYPES.CLEAR_PRODUCTS:
      return initialProductsState;

    default:
      throw new Error();
  }
};
