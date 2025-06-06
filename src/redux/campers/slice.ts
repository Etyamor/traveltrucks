import { getAll } from '@redux/campers/operations';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { Camper } from '@/types';

const initialState = {
  items: [] as Camper[],
  total: 0,
  onPage: 4,
  loading: false,
  error: null as string | null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    loadMore(state) {
      state.onPage += 4;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAll.fulfilled,
        (state, action: PayloadAction<{ total: number; items: Camper[] }>) => {
          state.loading = false;
          state.items = action.payload.items;
          state.total = action.payload.total;
        },
      )
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { loadMore } = campersSlice.actions;

export default campersSlice.reducer;
