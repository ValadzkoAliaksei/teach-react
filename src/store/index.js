import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './products-state';
import selectProductsReducer from './select-products-state';
import storageReducer from './storage-state';

export const store = configureStore({
  reducer: {
    productsReducer,
    selectProductsReducer,
    storageReducer,
  },
});
