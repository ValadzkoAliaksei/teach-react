import { TYPES } from '../action-types';

export const buyProducts = (payload) => ({
  type: TYPES.BUY_PRODUCTS,
  payload,
});

export const clearProducts = () => ({
  type: TYPES.CLEAR_PRODUCTS,
});
