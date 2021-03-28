import { Datum } from '../../interfaces';
import { API_KEYS } from '../../interfaces/api';
import { apiThunk } from './api';
import {
  CHANGE_PASSWORD_URLPARAMS,
  LOGIN_VALUES,
  PROFILE_INTL_USER_REQUEST,
  PROFILE_VALUES,
  REQUEST_OTP_REQUEST,
  SIGNUP_VALUES,
  VERIFY_OTP_REQUEST,
} from './interfaces/auth.interface';
import {
  DATE_FILTER,
  RATING_REQUEST,
  Report_Issues,
} from './interfaces/common.interface';
import {
  CREATE_DROPOFF_REQUEST,
  CREATE_INTL_SHIPMENT_REQUEST,
  DROPOFF_REQUEST,
  GET_PRICE_REQUEST,
  HAULAGE_PRICE_REQUEST,
  SHIPMENT_REQUEST,
  WAYBILL_PAYMENT_LOG_REQUEST,
} from './interfaces/shipping.interface';
import { Thunk } from './interfaces/thunks.interface';
import { WALLET_PAYMENT_LOG_REQUEST } from './interfaces/wallet.interface';

export const thunks: Thunk = {
  LOGIN: (request: LOGIN_VALUES) =>
    apiThunk<LOGIN_VALUES>({
      key: API_KEYS.LOGIN,
      request,
      apiOptions: {
        data: request,
      },
    }),
  SIGN_UP: (request: SIGNUP_VALUES) =>
    apiThunk<SIGNUP_VALUES>({
      key: API_KEYS.SIGN_UP,
      request,
      apiOptions: {
        data: request,
      },
    }),
  EDIT_PROFILE: (request: PROFILE_VALUES) =>
    apiThunk<PROFILE_VALUES>({
      key: API_KEYS.EDIT_PROFILE,
      request,
      apiOptions: {
        data: request,
      },
    }),
  FORGOT_PASSWORD: (request: Pick<PROFILE_VALUES, 'Email'>) =>
    apiThunk<Pick<PROFILE_VALUES, 'Email'>>({
      key: API_KEYS.EDIT_PROFILE,
      request,
      apiOptions: {
        data: request,
      },
    }),
  CHANGE_PASSWORD: (request: CHANGE_PASSWORD_URLPARAMS) =>
    apiThunk<CHANGE_PASSWORD_URLPARAMS>({
      key: API_KEYS.EDIT_PROFILE,
      request,
      apiOptions: {},
      urlParams: (request as unknown) as Datum,
    }),
  GET_WALLET_BALANCE: () =>
    apiThunk({
      key: API_KEYS.GET_WALLET_BALANCE,
      request: {},
      apiOptions: {},
    }),
  GET_STATIONS: () =>
    apiThunk({
      key: API_KEYS.GET_STATIONS,
      request: {},
      apiOptions: {},
    }),
  GET_ITEM_TYPES: () =>
    apiThunk({
      key: API_KEYS.GET_ITEM_TYPES,
      request: {},
      apiOptions: {},
    }),
  GET_ACTIVE_LGAS: () =>
    apiThunk({
      key: API_KEYS.GET_ACTIVE_LGAS,
      request: {},
      apiOptions: {},
    }),
  GET_SPECIAL_PACKAGES: () =>
    apiThunk({
      key: API_KEYS.GET_SPECIAL_PACKAGES,
      request: {},
      apiOptions: {},
    }),
  WALLET_TRANSACTIONS_SHIPMENT_HISTORY: () =>
    apiThunk({
      key: API_KEYS.WALLET_TRANSACTIONS_SHIPMENT_HISTORY,
      request: {},
      apiOptions: {},
    }),
  TRACK_SHIPMENT: (waybillnumber: string) =>
    apiThunk({
      key: API_KEYS.TRACK_SHIPMENT,
      request: { waybillnumber },
      apiOptions: {},
      urlParams: {
        waybillnumber,
      },
    }),
  GET_HAULAGE: () =>
    apiThunk({
      key: API_KEYS.GET_HAULAGE,
      request: {},
      apiOptions: {},
    }),
  GET_HAULAGE_PRICE: (request: HAULAGE_PRICE_REQUEST) =>
    apiThunk<HAULAGE_PRICE_REQUEST>({
      key: API_KEYS.GET_HAULAGE_PRICE,
      request,
      apiOptions: {
        data: request,
      },
    }),
  GET_SHIPMENT_DETAILS: (waybillnumber: string) =>
    apiThunk({
      key: API_KEYS.GET_SHIPMENT_DETAILS,
      request: { waybillnumber },
      apiOptions: {},
      urlParams: {
        waybillnumber,
      },
    }),
  GET_SHIPMENT_IN_DISPUTE: () =>
    apiThunk({
      key: API_KEYS.GET_SHIPMENT_IN_DISPUTE,
      request: {},
      apiOptions: {},
    }),
  GET_DROPOFF: (waybillnumber: number) =>
    apiThunk({
      key: API_KEYS.GET_DROPOFF,
      request: { waybillnumber },
      apiOptions: {},
      urlParams: {
        waybillnumber,
      },
    }),
  GET_OUTSTANDING_PAYMENTS: () =>
    apiThunk({
      key: API_KEYS.GET_OUTSTANDING_PAYMENTS,
      request: {},
      apiOptions: {},
    }),
  GET_PAYMENT_STATUS: (waybillnumber: number) =>
    apiThunk({
      key: API_KEYS.GET_PAYMENT_STATUS,
      request: { waybillnumber },
      apiOptions: {},
      urlParams: {
        waybillnumber,
      },
    }),
  GET_HOME_DELIVERY_LOCATIONS: () =>
    apiThunk({
      key: API_KEYS.GET_HOME_DELIVERY_LOCATIONS,
      request: {},
      apiOptions: {},
    }),
  GET_SERVICE_CENTERS_BY_STATION: (stationid: string | number) =>
    apiThunk({
      key: API_KEYS.GET_SERVICE_CENTERS_BY_STATION,
      request: { stationid },
      apiOptions: {},
      urlParams: {
        stationid,
      },
    }),
  GET_SERVICE_CENTERS_BY_COUNTRY: (countryid: string | number) =>
    apiThunk({
      key: API_KEYS.GET_SERVICE_CENTERS_BY_COUNTRY,
      request: { countryid },
      apiOptions: {},
      urlParams: {
        countryid,
      },
    }),
  GET_IDENTIFICATION_TYPES: () =>
    apiThunk({
      key: API_KEYS.GET_IDENTIFICATION_TYPES,
      request: {},
      apiOptions: {},
    }),
  GET_ACTIVE_COUNTRIES: () =>
    apiThunk({
      key: API_KEYS.GET_ACTIVE_COUNTRIES,
      request: {},
      apiOptions: {},
    }),
  GET_SHIPMENT_MESSAGE: () =>
    apiThunk({
      key: API_KEYS.GET_SHIPMENT_MESSAGE,
      request: {},
      apiOptions: {},
    }),
  GET_NOTIFICATIONS: () =>
    apiThunk({
      key: API_KEYS.GET_NOTIFICATIONS,
      request: {},
      apiOptions: {},
    }),
  UPDATE_NOTIFICATION: (notificationid: string | number) =>
    apiThunk({
      key: API_KEYS.UPDATE_NOTIFICATION,
      request: { notificationid },
      apiOptions: {},
      urlParams: {
        notificationid,
      },
    }),
  GET_STORES_BY_COUNTRY: (countryid: string | number) =>
    apiThunk({
      key: API_KEYS.GET_STORES_BY_COUNTRY,
      request: { countryid },
      apiOptions: {},
      urlParams: {
        countryid,
      },
    }),
  GET_INTERNATIONAL_SHIPMENTS: () =>
    apiThunk({
      key: API_KEYS.GET_INTERNATIONAL_SHIPMENTS,
      request: {},
      apiOptions: {},
    }),
  VERIFY_PAYMENT: (waybillnumber: string) =>
    apiThunk({
      key: API_KEYS.GET_PAYMENT_STATUS,
      request: { waybillnumber },
      apiOptions: {},
      urlParams: {
        waybillnumber,
      },
    }),
  REPORT_ISSUES: (request: Report_Issues) =>
    apiThunk<Report_Issues>({
      key: API_KEYS.REPORT_ISSUES,
      request,
      apiOptions: {
        data: request,
      },
    }),
  GET_PRICE: (request: GET_PRICE_REQUEST) =>
    apiThunk<GET_PRICE_REQUEST>({
      key: API_KEYS.GET_PRICE,
      request,
      apiOptions: {
        data: request,
      },
    }),
  ADD_WAYBILL_PAYMENT_LOG: (request: WAYBILL_PAYMENT_LOG_REQUEST) =>
    apiThunk<WAYBILL_PAYMENT_LOG_REQUEST>({
      key: API_KEYS.ADD_WAYBILL_PAYMENT_LOG,
      request,
      apiOptions: {
        data: request,
      },
    }),
  CREATE_SHIPMENT: (request: SHIPMENT_REQUEST) =>
    apiThunk<SHIPMENT_REQUEST>({
      key: API_KEYS.CREATE_SHIPMENT,
      request,
      apiOptions: {
        data: request,
      },
    }),
  RESOLVE_DISPUTE: () =>
    apiThunk({
      key: API_KEYS.RESOLVE_DISPUTE,
      request: {},
      apiOptions: {},
    }),
  CANCEL_SHIPMENT: (waybillnumber: string) =>
    apiThunk({
      key: API_KEYS.CANCEL_SHIPMENT,
      request: { waybillnumber },
      apiOptions: {},
      urlParams: {
        waybillnumber,
      },
    }),
  CANCEL_SHIPMENT_NOCHARGE: (waybillnumber: string) =>
    apiThunk({
      key: API_KEYS.CANCEL_SHIPMENT_NOCHARGE,
      request: { waybillnumber },
      apiOptions: {},
      urlParams: {
        waybillnumber,
      },
    }),
  ADD_WALLET_PAYMENT_LOG: (request: WALLET_PAYMENT_LOG_REQUEST) =>
    apiThunk<WALLET_PAYMENT_LOG_REQUEST>({
      key: API_KEYS.ADD_WALLET_PAYMENT_LOG,
      request,
      apiOptions: {
        data: request,
      },
    }),
  ADD_RATING: (request: RATING_REQUEST) =>
    apiThunk<RATING_REQUEST>({
      key: API_KEYS.ADD_RATING,
      request,
      apiOptions: {
        data: request,
      },
    }),
  VERIFY_OTP: (request: VERIFY_OTP_REQUEST) =>
    apiThunk<VERIFY_OTP_REQUEST>({
      key: API_KEYS.VERIFY_OTP,
      request,
      apiOptions: {
        data: request,
      },
    }),
  RESEND_OTP: (request: REQUEST_OTP_REQUEST) =>
    apiThunk<REQUEST_OTP_REQUEST>({
      key: API_KEYS.VERIFY_OTP,
      request,
      apiOptions: {
        data: request,
      },
    }),
  GET_DROPOFF_PRICE: (request: DROPOFF_REQUEST) =>
    apiThunk<DROPOFF_REQUEST>({
      key: API_KEYS.GET_DROPOFF_PRICE,
      request,
      apiOptions: {
        data: request,
      },
    }),
  CREATE_DROPOFF: (request: CREATE_DROPOFF_REQUEST) =>
    apiThunk<CREATE_DROPOFF_REQUEST>({
      key: API_KEYS.CREATE_DROPOFF,
      request,
      apiOptions: {
        data: request,
      },
    }),
  CANCEL_DROPOFF: (tempcode: string) =>
    apiThunk({
      key: API_KEYS.CANCEL_DROPOFF,
      request: { tempcode },
      apiOptions: {},
      urlParams: {
        tempcode,
      },
    }),
  INTL_SHIPMENT_REQUEST_LIST: (request: DATE_FILTER) =>
    apiThunk<DATE_FILTER>({
      key: API_KEYS.GET_DROP_OFF_LIST,
      request,
      apiOptions: {
        data: request,
      },
    }),
  GET_DROP_OFF_LIST: (request: DATE_FILTER) =>
    apiThunk<DATE_FILTER>({
      key: API_KEYS.GET_DROP_OFF_LIST,
      request,
      apiOptions: {
        data: request,
      },
    }),
  CREATE_INTL_SHIPMENT_REQUEST: (request: CREATE_INTL_SHIPMENT_REQUEST) =>
    apiThunk<CREATE_INTL_SHIPMENT_REQUEST>({
      key: API_KEYS.CREATE_INTL_SHIPMENT_REQUEST,
      request,
      apiOptions: {
        data: request,
      },
    }),
  EDIT_INTL_SHIPMENT_REQUEST: (requestnumber: string) =>
    apiThunk({
      key: API_KEYS.EDIT_INTL_SHIPMENT_REQUEST,
      request: { requestnumber },
      apiOptions: {},
      urlParams: {
        requestnumber,
      },
    }),
  GET_INTL_SHIPMENT_MESSAGE: (countryid: number) =>
    apiThunk({
      key: API_KEYS.GET_INTL_SHIPMENT_MESSAGE,
      request: { countryid },
      apiOptions: {
        params: {
          countryid,
        },
      },
    }),
  PROFILE_INTL_USER: (request: PROFILE_INTL_USER_REQUEST) =>
    apiThunk<PROFILE_INTL_USER_REQUEST>({
      key: API_KEYS.PROFILE_INTL_USER,
      request,
      apiOptions: {
        data: request,
      },
    }),
  GET_VEHICLE_STATUS: () =>
    apiThunk({
      key: API_KEYS.GET_VEHICLE_STATUS,
      request: {},
      apiOptions: {},
    }),
  UPLOAD_IMAGE: (file: Blob) =>
    apiThunk({
      key: API_KEYS.UPLOAD_IMAGE,
      request: { file },
      apiOptions: {
        data: file,
      },
    }),
  HANDLE_SHIPMENT: (waybillnumber: string) =>
    apiThunk({
      key: API_KEYS.HANDLE_SHIPMENT,
      request: { waybillnumber },
      apiOptions: {},
      urlParams: {
        waybillnumber,
      },
    }),
  GET_PARTNER_DETAILS: (waybillnumber: string) =>
    apiThunk({
      key: API_KEYS.GET_PARTNER_DETAILS,
      request: { waybillnumber },
      apiOptions: {},
      urlParams: {
        waybillnumber,
      },
    }),
  DELETE_SHIPMENT: (tempcode: string) =>
    apiThunk({
      key: API_KEYS.DELETE_SHIPMENT,
      request: { tempcode },
      apiOptions: {},
      urlParams: {
        tempcode,
      },
    }),
};
