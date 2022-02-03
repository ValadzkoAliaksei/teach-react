import { TYPES } from '../action-types';
import { initialSelectProductsState } from './initial-state';

export const selectProductsReducer = (prevState = initialSelectProductsState, action = {}) => {
  switch (action.type) {
    case TYPES.SELECT_PRODUCT: {
      const { productId, value, sumCost } = action.payload;
      return {
        ...prevState,
        [productId]: {
          value,
          sumCost,
        },
      };
    }
    case TYPES.CLEAR_PRODUCT:
      return initialSelectProductsState;

    default:
      return prevState;
  }
};
