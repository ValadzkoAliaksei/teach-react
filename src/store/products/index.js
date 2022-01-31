import { TYPES } from '../action-types';

export const initialState = {
  tv: { value: 0, sumCost: 0 },
  fridge: { value: 0, sumCost: 0 },
  washingMashine: { value: 0, sumCost: 0 },
  sum: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.BUY_PRODUCT: {
      const { productId, value, sumCost } = action.product;
      return {
        ...state,
        [productId]: {
          value: state[productId].value + value,
          sumCost: state[productId].sumCost + sumCost,
        },
        sum: state.sum + sumCost,
      };
    }
    case TYPES.CLEAR_PRODUCTS: {
      return initialState;
    }

    default:
      return state;
  }
};
