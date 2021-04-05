import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
  },
  reducers: {
    changeUser(state, { payload: userId }) {
      state.userId = userId;
    },
  },
});

export const { changeUser } = userSlice.actions;

export const selectUser = (state) => state.user.userId;

export default userSlice.reducer;
