import { AxiosError } from 'axios';
import { Props as ModalProps } from 'react-modal';
import { API_KEYS } from './api';

export type VerticalPosition = 'top' | 'bottom';
export type HorizontalPosition = 'left' | 'right' | 'center';
export type AlertType = 'success' | 'error' | 'info' | 'warning';

export interface NotificationActionProps {
  alertType: AlertType;
  message: string;
}

export interface ModalAction {
  component: React.ReactElement | null;
  modalProps: Omit<ModalProps, 'isOpen'>;
}

export interface NotificationState {
  alertType: AlertType;
  message: string;
}

export interface ModalState {
  component: React.ReactElement | null;
  modalProps: ModalProps;
}

export interface AppState {
  notification: NotificationState;
  apiRequest: KeyFetchState;
  modal: ModalState;
}

export type KeyFetchState = {
  [x in API_KEYS]?: FetchState;
};

export interface KeyFetchAction {
  key: API_KEYS;
  request?: Datum | null;
  response?: Datum | null;
  error?: AxiosError | null;
}

export interface FetchState {
  loading: boolean;
  success: boolean;
  request?: Datum | null;
  response?: Datum | null;
  error?: AxiosError | null;
}

export interface Datum {
  [i: number]: never | boolean;
  [k: string]: any | boolean;
}

export interface FetchAction {
  type: string;
  request?: Datum | null;
  response?: Data | Datum | null;
  error?: AxiosError | null;
}

export type Data = Datum[];

export interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServicePageDataCardList {
  title: string;
  cards: ServiceCard[];
}

export interface ServicePageData {
  id: string;
  slug: string;
  title: string;
  description: string;
  contentImg: string;
  contentNode: React.ReactElement;
  card_list?: ServicePageDataCardList;
  bodyNode?: React.ReactElement;
  embedded_stream?: string;
}
