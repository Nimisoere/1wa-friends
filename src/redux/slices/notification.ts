import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationActionProps, NotificationState } from '../../interfaces';
import { initialNotificationState } from '../../interfaces/initialStates';

const notification = createSlice({
  name: 'notification',
  initialState: initialNotificationState,
  reducers: {
    show(
      state: NotificationState,
      action: PayloadAction<NotificationActionProps>
    ) {
      state.alertType = action.payload.alertType;
      state.message = action.payload.message;
    },
    clear(
      state: NotificationState,
      action: PayloadAction<NotificationActionProps>
    ) {
      state.alertType = 'info';
      state.message = '';
    },
  },
});

export const { show, clear } = notification.actions;

export default notification.reducer;
