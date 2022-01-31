import { TYPES } from '../action-types';

export const buyProduct = (product) => ({
  type: TYPES.BUY_PRODUCT,
  product,
});

export const clearProducts = () => ({
  type: TYPES.CLEAR_PRODUCTS,
});
