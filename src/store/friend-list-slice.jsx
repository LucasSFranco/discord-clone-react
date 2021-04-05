import { createSlice } from '@reduxjs/toolkit';

export const friendListSlice = createSlice({
  name: 'friendList',
  initialState: {
    tab: 'all-friends',
  },
  reducers: {
    changeTab(state, { payload: tab }) {
      state.tab = tab;
    },
  },
});

export const { changeTab } = friendListSlice.actions;

export const selectTab = (state) => state.friendList.tab;

export default friendListSlice.reducer;
