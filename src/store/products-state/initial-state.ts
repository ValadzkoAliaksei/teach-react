import type { InitialProductsStateType } from './types';

export const initialProductsState: InitialProductsStateType = {
  tv: { value: 0, sumCost: 0 },
  fridge: { value: 0, sumCost: 0 },
  washingMashine: { value: 0, sumCost: 0 },
  sum: 0,
};
