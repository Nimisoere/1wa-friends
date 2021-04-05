import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalAction, ModalState } from '../../interfaces';
import { initialModalState } from '../../interfaces/initialStates';

const modal = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    showModal(state: ModalState, action: PayloadAction<ModalAction>) {
      state.modalProps = {
        ...state.modalProps,
        ...action.payload.modalProps,
        isOpen: true,
      };
      state.component = action.payload.component;
    },
    hideModal(state: ModalState) {
      state.modalProps = {
        isOpen: false,
      };
      state.component = null;
    },
  },
});

export const { showModal, hideModal } = modal.actions;

export default modal.reducer;
