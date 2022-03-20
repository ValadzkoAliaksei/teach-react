/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductsActionType } from 'types/products-action-type';
import { initialProductsState } from './initial-state';

const productsSlice = createSlice({
  name: 'productsReducer',
  initialState: initialProductsState,
  reducers: {
    buyProducts: (state, action: PayloadAction<ProductsActionType>) => {
      const { productId, value, sumCost } = action.payload;
      state[productId].value += value;
      state[productId].sumCost += sumCost;
      state.sum += sumCost;
    },
    clearProducts: () => initialProductsState,
  },
});

export const { buyProducts, clearProducts } = productsSlice.actions;
export default productsSlice.reducer;
