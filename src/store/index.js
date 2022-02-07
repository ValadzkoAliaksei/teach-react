import { combineReducers } from 'redux';

import productsReducer from './products-state';
import selectProductsReducer from './select-products-state';

export const reducer = combineReducers({
  productsReducer,
  selectProductsReducer,
});
