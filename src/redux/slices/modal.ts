import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalAction } from "../../interfaces";
import { initialModalState } from "../../interfaces/initialStates";

const modal = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    show(state, action: PayloadAction<ModalAction>) {
      state.modalProps = {
        ...state.modalProps,
        ...action.payload.modalProps,
        isOpen: true,
      };
      state.component = action.payload.component;
    },
    hide(state) {
      state.modalProps = {
        isOpen: false,
      };
      state.component = null;
    },
  },
});

export const { show, hide } = modal.actions;

export default modal.reducer;
