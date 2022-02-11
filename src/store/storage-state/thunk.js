import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getStorage = createAsyncThunk('storageReducer/getStorage', () =>
  axios
    .get('./storage.json')
    .then(({ data }) => data)
    .catch((error) => error),
);
