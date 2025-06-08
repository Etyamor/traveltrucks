import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { Filter } from '@/types';

const initialState = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
  equipment: {}
} as Filter;

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (_, action: PayloadAction<Filter>) => action.payload,
    resetFilter: () => initialState,
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
