import type { RootState } from '@redux/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectLocationFilter = (state: RootState) => state.filter.location;

export const selectFormFilter = (state: RootState) => state.filter.form;

export const selectEngineFilter = (state: RootState) => state.filter.engine;

export const selectEquipmentFilter = (state: RootState) => state.filter.equipment;

export const selectTransmissionFilter = (state: RootState) => state.filter.transmission;

export const selectFilter = createSelector(
  [selectLocationFilter, selectFormFilter, selectEngineFilter, selectTransmissionFilter, selectEquipmentFilter],
  (location, form, engine, transmission, equipment) => ({
    location,
    form,
    engine,
    transmission,
    equipment,
  })
)