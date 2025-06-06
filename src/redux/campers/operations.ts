import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCamperById, fetchCampers } from '@lib/api';

export const getAll = createAsyncThunk(
  "getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchCampers();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
)

export const getById = createAsyncThunk(
  "getById",
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await fetchCamperById(id);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
)