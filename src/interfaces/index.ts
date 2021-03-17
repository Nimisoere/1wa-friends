import { AxiosError } from "axios";
import { Props as ModalProps } from "react-modal";

export type VerticalPosition = "top" | "bottom";
export type HorizontalPosition = "left" | "right" | "center";
export type AlertType = "success" | "error" | "info" | "warning";

export interface NotificationActionProps {
  alertType: AlertType;
  message: string;
}

export interface ModalAction {
  component: React.ReactElement | null;
  modalProps: Omit<ModalProps, "isOpen">;
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

export interface KeyFetchState {
  [x: string]: FetchState;
}

export interface KeyFetchAction {
  key: string;
  request?: Datum | null;
  response?: Data | Datum | null;
  error?: AxiosError | null;
}

export interface FetchState {
  loading: boolean;
  success: boolean;
  request: Datum | null;
  response: any | null;
  error: AxiosError | null;
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

export enum API_KEYS {
  GET_TEMPLATES = "GET_TEMPLATES",
  GET_TEMPLATE = "GET_TEMPLATES",
  CREATE_TEMPLATE = "GET_TEMPLATES",
  UPDATE_TEMPLATE = "GET_TEMPLATES",
  GENERATE_PDF = "GENERATE_PDF",
  CONVERT_XLS = "CONVERT_XLS",
}

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
