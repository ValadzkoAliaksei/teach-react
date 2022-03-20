import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getStorage = createAsyncThunk('storage/getStorage', async () => {
  try {
    const { data } = await axios.get('./storage.json');
    return data;
  } catch (e) {
    return e;
  }
});
