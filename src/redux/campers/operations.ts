import { fetchCamperById, fetchCampers } from '@lib/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAll = createAsyncThunk('getAll', async (_, { rejectWithValue }) => {
  try {
    return await fetchCampers();
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const getById = createAsyncThunk('getById', async (id: number, { rejectWithValue }) => {
  try {
    return await fetchCamperById(id);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
