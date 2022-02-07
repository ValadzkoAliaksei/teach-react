/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialSelectProductsState } from './initial-state';

export const selectProductSlice = createSlice({
  name: 'selectProductsReducer',
  initialState: initialSelectProductsState,
  reducers: {
    selectProduct: (state, action) => {
      const { productId, value, sumCost } = action.payload;
      state[productId] = {
        value,
        sumCost,
      };
    },
    clearProduct: () => initialSelectProductsState,
  },
});

export const { selectProduct, clearProduct } = selectProductSlice.actions;

export default selectProductSlice.reducer;
