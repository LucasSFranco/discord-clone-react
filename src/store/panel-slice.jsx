import { createSlice } from '@reduxjs/toolkit';

export const panelSlice = createSlice({
  name: 'panel',
  initialState: {
    panelId: null,
  },
  reducers: {
    openPanel(state, { payload: panelId }) {
      state.panelId = panelId;
    },
    closePanel(state) {
      state.panelId = null;
    },
  },
});

export const { openPanel, closePanel, togglePanel } = panelSlice.actions;

export const selectPanel = (state) => state.panel.panelId;

export default panelSlice.reducer;
