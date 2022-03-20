/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsActionType } from 'types/products-action-type';
import { initialSelectProductsState } from './initial-state';

const selectProductsSlice = createSlice({
  name: 'selectProductsReducer',
  initialState: initialSelectProductsState,
  reducers: {
    selectProduct: (state, action: PayloadAction<ProductsActionType>) => {
      const { productId, value, sumCost } = action.payload;
      state[productId].value = value;
      state[productId].sumCost = sumCost;
    },
    clearProduct: () => initialSelectProductsState,
  },
});

export const { selectProduct, clearProduct } = selectProductsSlice.actions;
export default selectProductsSlice.reducer;
