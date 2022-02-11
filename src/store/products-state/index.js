/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialProductsState } from './initial-state';

const productsSlice = createSlice({
  name: 'productsReducer',
  initialState: initialProductsState,
  reducers: {
    buyProducts: (state, action) => {
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
