import type { RootState } from '@redux/store';

export const selectCampers = (state: RootState) => state.campers.items;

export const selectTotalCampers = (state: RootState) => state.campers.total;

export const selectCampersOnPage = (state: RootState) => state.campers.onPage;

export const selectCampersLoading = (state: RootState) => state.campers.loading;