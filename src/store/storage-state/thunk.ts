import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { StorageType } from 'types/initial-storage-state-type';

export const getStorage = createAsyncThunk('storage/getStorage', async () => {
  try {
    const { data }: AxiosResponse<StorageType> = await axios.get('./storage.json');
    return data;
  } catch (e) {
    return e;
  }
});
