import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import productsReducer from './products-state';
import selectProductsReducer from './select-products-state';
import storageReducer from './storage-state';
import storage2Reducer from './storage-state2';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    productsReducer,
    selectProductsReducer,
    storageReducer,
    storage2Reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
