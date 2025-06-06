import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [] as any[],
  loading: false,
  error: null as string | null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
});

export default campersSlice.reducer;
