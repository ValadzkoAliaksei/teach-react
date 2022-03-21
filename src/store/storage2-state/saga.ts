import axios, { AxiosResponse } from 'axios';
import { call, CallEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import { StorageType } from 'types/initial-storage-state-type';
import { getStorageRequest, getStorageSuccess, getStorageError } from '.';

function* getStorageWorker(): Generator<
  | CallEffect<unknown>
  | PutEffect<{
      payload: StorageType;
      type: string;
    }>
  | PutEffect<{
      payload: undefined;
      type: string;
    }>,
  void,
  AxiosResponse<StorageType>
> {
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
