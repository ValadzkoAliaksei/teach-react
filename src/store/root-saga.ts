import { all } from 'redux-saga/effects';
import { getStorageSaga } from './storage2-state/saga';

export function* rootSaga() {
  yield all([getStorageSaga()]);
}
