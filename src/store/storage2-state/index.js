/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialStorage2State } from './initial-state';

const storage2Slice = createSlice({
  name: 'storage2Reducer',
  initialState: initialStorage2State,
  reducers: {
    getStorageRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = initialStorage2State.data;
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
