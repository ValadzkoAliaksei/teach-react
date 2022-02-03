import { TYPES } from '../action-types';

export const selectProduct = (payload) => ({
  type: TYPES.SELECT_PRODUCT,
  payload,
});

export const clearProduct = () => ({
  type: TYPES.CLEAR_PRODUCT,
});
