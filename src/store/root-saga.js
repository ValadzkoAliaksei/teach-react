import { all } from 'redux-saga/effects';
import getStorageSaga from './storage-state2/saga';

export function* rootSaga() {
  yield all([getStorageSaga()]);
}
