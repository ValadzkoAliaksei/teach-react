import { put, takeLatest, call, select } from 'redux-saga/effects';
import axios from 'axios';

import { getStorageError, getStorageRequest, getStorageSuccess } from '.';

export function* getStorageWorker() {
  try {
    const { data } = yield call(axios.get, './storage.json');
    yield put(getStorageSuccess(data));
  } catch (e) {
    yield put(getStorageError());
  }
}

export default function* getStorageSaga() {
  yield takeLatest(getStorageRequest.type, getStorageWorker);
}
