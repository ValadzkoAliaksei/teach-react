import { RootState } from 'store';
import { InitialProductsStateType } from 'store/products-state/types';
import { InitialStorageStateType } from 'types/initial-storage-state-type';
import { ProductType } from 'types/product-type';

export const productsSelector = (state: RootState): InitialProductsStateType => state.productsReducer;

export const selectedProductsSelector = (state: RootState, productId: string): ProductType =>
  state.selectProductsReducer[productId];

export const storageSelector = (state: RootState): InitialStorageStateType => state.storageReducer;
