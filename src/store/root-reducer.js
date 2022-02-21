import productsReducer from './products-state';
import selectProductsReducer from './select-products-state';
import storageReducer from './storage-state';
import storage2Reducer from './storage2-state';

const rootReduser = {
  productsReducer,
  selectProductsReducer,
  storageReducer,
  storage2Reducer,
};

export default rootReduser;
