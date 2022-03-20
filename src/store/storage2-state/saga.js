import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getStorageRequest, getStorageSuccess, getStorageError } from '.';

function* getStorageWorker() {
  try {
    const { data } = yield call(axios.get, './storage.json');
    yield put(getStorageSuccess(data));
  } catch (e) {
    yield put(getStorageError());
  }
}

export function* getStorageSaga() {
  yield takeLatest(getStorageRequest.type, getStorageWorker);
}
