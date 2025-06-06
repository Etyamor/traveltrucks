import { fetchCampers } from '@lib/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAll = createAsyncThunk('getAll', async (_, { rejectWithValue }) => {
  try {
    return await fetchCampers();
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
