/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialStorageState } from './initial-state';

const storage2Slice = createSlice({
  name: 'storage2Reducer',
  initialState: initialStorageState,
  reducers: {
    getStorageRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = initialStorageState.data;
    },
    getStorageSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },

    getStorageError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { getStorageRequest, getStorageSuccess, getStorageError } = storage2Slice.actions;
export default storage2Slice.reducer;
