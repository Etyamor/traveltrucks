import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Filter } from '@/types';

const initialState = {
  location: '',
} as Filter;

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.location = action.payload.location;
    },
    resetFilter: (state) => {
      state.location = '';
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
