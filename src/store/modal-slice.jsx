import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalId: null,
  },
  reducers: {
    openModal(state, { payload: modalId }) {
      state.modalId = modalId;
    },
    closeModal(state) {
      state.modalId = null;
    },
  },
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;

export const selectModal = (state) => state.modal.modalId;

export default modalSlice.reducer;
