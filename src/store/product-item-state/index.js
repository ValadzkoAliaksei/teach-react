import { TYPES } from '../action-types';
import { initialProductItemState } from './initial-state';

export const productItemReducer = (prevState, action) => {
  switch (action.type) {
    case TYPES.SELECT_PRODUCT: {
      const { value, sumCost } = action.payload;
      return {
        value,
        sumCost,
      };
    }
    case TYPES.CLEAR_PRODUCT:
      return initialProductItemState;

    default:
      throw new Error();
  }
};
