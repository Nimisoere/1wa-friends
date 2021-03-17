import {
  AppState,
  ModalState,
  FetchState,
  KeyFetchState,
  NotificationState,
} from ".";

export const initialNotificationState: NotificationState = {
  alertType: "info",
  message: "",
};

export const initialFetchState: FetchState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null,
};

export const initialModalState: ModalState = {
  modalProps: {
    isOpen: false,
  },
  component: null,
};

export const initialState: AppState = {
  notification: initialNotificationState,
  modal: initialModalState,
  apiRequest: {} as KeyFetchState,
};
