import { createSlice } from '@reduxjs/toolkit';

export const DMSlice = createSlice({
  name: 'dm',
  initialState: {
    user: null,
  },
  reducers: {
    changeDM(state, { payload: user }) {
      state.user = user;
    },
  },
});

export const { changeDM } = DMSlice.actions;

export const selectDM = (state) => state.dm.user;

export default DMSlice.reducer;
