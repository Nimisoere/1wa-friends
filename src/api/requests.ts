import axios from 'axios';
import { baseInstance } from '.';
import { API_KEYS, API_LIBRARY as IAPI_LIBRARY } from '../interfaces/api';

export const API_LIBRARY: IAPI_LIBRARY = {
  LOGIN: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
      method: 'post',
    },
  },
  SIGN_UP: {
    instance: baseInstance,
    request: {
      url: 'portal/signup',
      method: 'post',
    },
  },
  EDIT_PROFILE: {
    instance: baseInstance,
    request: {
      url: 'portal/editProfile',
      method: 'post',
    },
  },
  FORGOT_PASSWORD: {
    instance: baseInstance,
    request: {
      url: 'portal/forgotpassword',
      method: 'post',
    },
  },
  CHANGE_PASSWORD: {
    instance: baseInstance,
    request: {
      url: 'portal/portal/changepassword/:userId/:currentPassword/:newPassword',
      method: 'put',
    },
  },
  GET_WALLET_BALANCE: {
    instance: baseInstance,
    request: {
      url: 'portal/getWalletBalance',
      method: 'get',
    },
  },
  GET_STATIONS: {
    instance: baseInstance,
    request: {
      url: 'portal/getStations',
      method: 'get',
    },
  },
  GET_ITEM_TYPES: {
    instance: baseInstance,
    request: {
      url: 'portal/itemTypes',
      method: 'get',
    },
  },
  GET_ACTIVE_LGAS: {
    instance: baseInstance,
    request: {
      url: 'portal/getactivelgas',
      method: 'get',
    },
  },
  GET_SPECIAL_PACKAGES: {
    instance: baseInstance,
    request: {
      url: 'portal/getspecialpackages',
      method: 'get',
    },
  },
  WALLET_TRANSACTIONS_SHIPMENT_HISTORY: {
    instance: baseInstance,
    request: {
      url: 'portal/getwallettransactionandpreshipmenthistory',
      method: 'get',
    },
  },
  TRACK_SHIPMENT: {
    instance: baseInstance,
    request: {
      url: 'portal/trackshipment/:waybillnumber',
      method: 'get',
    },
  },
  GET_HAULAGE: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
      method: 'get',
    },
  },
  GET_HAULAGE_PRICE: {
    instance: baseInstance,
    request: {
      url: 'portal/haulage',
      method: 'get',
    },
  },
  GET_SHIPMENT_DETAILS: {
    instance: baseInstance,
    request: {
      url: 'portal/getpreshipmentmobiledetails/:waybillnumber',
      method: 'get',
    },
  },
  GET_DROPOFF: {
    instance: baseInstance,
    request: {
      url: 'portal/dropoffs/:waybillnumber',
      method: 'get',
    },
  },
  GET_OUTSTANDING_PAYMENTS: {
    instance: baseInstance,
    request: {
      url: 'portal/outstandingpayments',
      method: 'get',
    },
  },
  GET_PAYMENT_STATUS: {
    instance: baseInstance,
    request: {
      url: 'portal/paymentforshipment/:waybillnumber',
    },
  },
  GET_HOME_DELIVERY_LOCATIONS: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_SERVICE_CENTERS_BY_STATION: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_SERVICE_CENTERS_BY_COUNTRY: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_IDENTIFICATION_TYPES: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_ACTIVE_COUNTRIES: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_SHIPMENT_MESSAGE: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_NOTIFICATIONS: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  UPDATE_NOTIFICATION: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_STORES_BY_COUNTRY: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_INTERNATIONAL_SHIPMENTS: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  VERIFY_PAYMENT: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  REPORT_ISSUES: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_PRICE: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  ADD_WAYBILL_PAYMENT_LOG: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  CREATE_SHIPMENT: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  RESOLVE_DISPUTE: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  CANCEL_SHIPMENT: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  CANCEL_SHIPMENT_NOCHARGE: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  ADD_WALLET_PAYMENT_LOG: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  ADD_RATING: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  VERIFY_OTP: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  RESEND_OTP: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_DROPOFF_PRICE: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  CREATE_DROPOFF: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  CANCEL_DROPOFF: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  INTL_SHIPMENT_REQUEST_LIST: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_DROP_OFF_LIST: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  CREATE_INTL_SHIPMENT_REQUEST: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  EDIT_INTL_SHIPMENT_REQUEST: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_INTL_SHIPMENT_MESSAGE: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  PROFILE_INTL_USER: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_VEHICLE_STATUS: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  UPLOAD_IMAGE: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  HANDLE_SHIPMENT: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
  GET_PARTNER_DETAILS: {
    instance: baseInstance,
    request: {
      url: 'portal/login',
    },
  },
};

export const makeRequest = async (
  api_key: API_KEYS,
  params: any,
  data: any
) => {
  const api = API_LIBRARY[api_key];
  try {
    const response = await api.instance.request({
      ...api.request,
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiJiNDc2ZmVhOC04NGU0LTRjNWItYWM1MS0yZWZkNjg1MjZmZGMiLCJ1bmlxdWVfbmFtZSI6IklORDI2NTkzNiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vYWNjZXNzY29udHJvbHNlcnZpY2UvMjAxMC8wNy9jbGFpbXMvaWRlbnRpdHlwcm92aWRlciI6IkFTUC5ORVQgSWRlbnRpdHkiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImEwMTc3NWUxLTc2ZTMtNDJhNC1hN2RhLWEzOTM2MWViZmY2YiIsInJvbGUiOiJUaGlyZFBhcnR5IiwiQWN0aXZpdHkiOlsiQ3JlYXRlLlRoaXJkUGFydHkiLCJEZWxldGUuVGhpcmRQYXJ0eSIsIlVwZGF0ZS5UaGlyZFBhcnR5IiwiVmlldy5UaGlyZFBhcnR5Il0sImlzcyI6Imh0dHBzOi8vYWdpbGl0eXN5c3RlbWFwaWRldm0uYXp1cmV3ZWJzaXRlcy5uZXQvIiwiYXVkIjoiNDE0ZTE5MjdhMzg4NGY2OGFiYzc5ZjcyODM4MzdmZDEiLCJleHAiOjE2MTY5Mjc2OTcsIm5iZiI6MTYxNjQ5NTY5N30.rs46tko1LsAYZAeUjxhzmZEtziHZAay94AurwEZ9-D4',
      },
      params,
      data,
    });
    return response;
  } catch (err) {
    return err;
  }
};
