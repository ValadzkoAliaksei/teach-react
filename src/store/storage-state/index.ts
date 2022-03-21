/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StorageType } from 'types/initial-storage-state-type';
import { initialStorageState } from './initial-state';
import { getStorage } from './thunk';

const storageSlice = createSlice({
  name: 'storageReducer',
  initialState: initialStorageState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStorage.pending.type, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = initialStorageState.data;
    });
    builder.addCase(getStorage.fulfilled.type, (state, action: PayloadAction<StorageType>) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getStorage.rejected.type, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default storageSlice.reducer;
