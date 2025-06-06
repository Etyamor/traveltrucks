import type { RootState } from '@redux/store';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [] as number[],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      state.items = state.items.includes(action.payload)
        ? state.items.filter((id) => id !== action.payload)
        : [...state.items, action.payload];
    },
  },
});
export const { toggleFavorite } = favoriteSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites.items;
export default favoriteSlice.reducer;
