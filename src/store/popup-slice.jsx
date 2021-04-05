import { createSlice } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    popupId: null,
  },
  reducers: {
    openPopup(state, { payload: popupId }) {
      state.popupId = popupId;
    },
    closePopup(state) {
      state.popupId = null;
    },
    togglePopup(state, { payload: popupId }) {
      state.popupId = state.popupId ? null : popupId;
    },
  },
});

export const { openPopup, closePopup, togglePopup } = popupSlice.actions;

export const selectPopup = (state) => state.popup.popupId;

export default popupSlice.reducer;
