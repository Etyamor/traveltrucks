import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { Filter } from '@/types';

const initialState = {
  location: '',
  engine: '',
  form: '',
} as Filter;

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      Object.assign(state, action.payload);
    },
    resetFilter: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
