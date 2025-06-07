import { fetchCampers } from '@lib/api';
import type { RootState } from '@redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAll = createAsyncThunk('getAll', async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState() as RootState;
    const filter = state.filter;
    return await fetchCampers(filter);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
