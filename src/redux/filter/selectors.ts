import type { RootState } from '@redux/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectLocationFilter = (state: RootState) => state.filter.location;

export const selectFormFilter = (state: RootState) => state.filter.form;

export const selectFilter = createSelector(
  [selectLocationFilter, selectFormFilter],
  (location, form) => ({
    location,
    form,
  })
)