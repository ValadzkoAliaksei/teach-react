import axios from 'axios';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { getStorageRequest, getStorageSuccess, getStorageError } from '.';

function* getStorageWorker2() {
  try {
    const { data } = yield call(axios.get, 'https://training.cleverland.by/shop/products');
    yield put(getStorageSuccess(data));
  } catch (e) {
    yield put(getStorageError());
  }
}

function* getStorageWorker() {
  try {
    const { data } = yield call(axios.get, 'https://training.cleverland.by/shop/products');
    yield put(getStorageSuccess(data));
    yield fork(getStorageWorker2);
  } catch (e) {
    yield put(getStorageError());
  }
}

export function* getStorageSaga() {
  yield takeLatest(getStorageRequest.type, getStorageWorker);
}
