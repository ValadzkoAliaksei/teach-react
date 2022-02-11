/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialSelectProductsState } from './initial-state';

const selectProductsSlice = createSlice({
  name: 'selectProductsReducer',
  initialState: initialSelectProductsState,
  reducers: {
    selectProduct: (state, action) => {
      const { productId, value, sumCost } = action.payload;
      state[productId].value = value;
      state[productId].sumCost = sumCost;
    },
    clearProduct: () => initialSelectProductsState,
  },
});

export const { selectProduct, clearProduct } = selectProductsSlice.actions;
export default selectProductsSlice.reducer;
