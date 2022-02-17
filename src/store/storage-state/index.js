/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { initialStorageState } from './initial-state';
import { getStorage } from './thunk';

const storageSlice = createSlice({
  name: 'storageReducer',
  initialState: initialStorageState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStorage.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getStorage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.storage = payload;
    });
    builder.addCase(getStorage.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default storageSlice.reducer;
