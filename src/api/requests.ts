import { AxiosRequestConfig } from 'axios';
import { baseInstance, nodeInstance } from '.';
import { Datum } from '../interfaces';
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
      url: 'portal/portal/changepassword/:UserId/:currentPassword/:newPassword',
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
      url: 'portal/haulage',
      method: 'get',
    },
  },
  GET_HAULAGE_PRICE: {
    instance: baseInstance,
    request: {
      url: 'portal/gethaulagepriceformobile',
      method: 'post',
    },
  },
  GET_SHIPMENT_DETAILS: {
    instance: baseInstance,
    request: {
      url: 'portal/getpreshipmentmobiledetails/:waybillnumber',
      method: 'get',
    },
  },
  GET_SHIPMENT_IN_DISPUTE: {
    instance: baseInstance,
    request: {
      url: 'portal/getpreshipmentindispute',
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
      method: 'get',
    },
  },
  GET_HOME_DELIVERY_LOCATIONS: {
    instance: baseInstance,
    request: {
      url: 'portal/activehomedeliverylocations',
      method: 'get',
    },
  },
  GET_SERVICE_CENTERS_BY_STATION: {
    instance: baseInstance,
    request: {
      url: 'portal/servicecentresbystation/:stationid',
      method: 'get',
    },
  },
  GET_SERVICE_CENTERS_BY_COUNTRY: {
    instance: baseInstance,
    request: {
      url: 'portal/servicecentresbycountry/:countryid',
      method: 'get',
    },
  },
  GET_IDENTIFICATION_TYPES: {
    instance: baseInstance,
    request: {
      url: 'portal/identificationtypes',
      method: 'get',
    },
  },
  GET_ACTIVE_COUNTRIES: {
    instance: baseInstance,
    request: {
      url: 'portal/getactivecountries',
      method: 'get',
    },
  },
  GET_SHIPMENT_MESSAGE: {
    instance: baseInstance,
    request: {
      url: 'portal/intlshipmentsmessage',
      method: 'get',
    },
  },
  GET_NOTIFICATIONS: {
    instance: baseInstance,
    request: {
      url: 'portal/getnotifications',
      method: 'get',
    },
  },
  UPDATE_NOTIFICATION: {
    instance: baseInstance,
    request: {
      url: 'portal/updatenotification/:notificationid',
      method: 'put',
    },
  },
  GET_STORES_BY_COUNTRY: {
    instance: baseInstance,
    request: {
      url: 'portal/storesbycountry/:countryid',
      method: 'get',
    },
  },
  GET_INTERNATIONAL_SHIPMENTS: {
    instance: baseInstance,
    request: {
      url: 'portal/consolidatedintlshipments',
      method: 'get',
    },
  },
  VERIFY_PAYMENT: {
    instance: baseInstance,
    request: {
      url: 'portal/verifypayment/:waybillnumber',
      method: 'get',
    },
  },
  REPORT_ISSUES: {
    instance: baseInstance,
    request: {
      url: 'webtracking/reportIssues',
      method: 'post',
    },
  },
  GET_PRICE: {
    instance: baseInstance,
    request: {
      url: 'portal/getprice',
      method: 'post',
    },
  },
  ADD_WAYBILL_PAYMENT_LOG: {
    instance: baseInstance,
    request: {
      url: 'portal/addwaybillpaymentlog',
      method: 'post',
    },
  },
  CREATE_SHIPMENT: {
    instance: baseInstance,
    request: {
      url: 'portal/createShipment',
      method: 'post',
    },
  },
  RESOLVE_DISPUTE: {
    instance: baseInstance,
    request: {
      url: 'portal/resolvedispute',
      method: 'post',
    },
  },
  CANCEL_SHIPMENT: {
    instance: baseInstance,
    request: {
      url: 'portal/cancelshipment/:waybillnumber',
      method: 'post',
    },
  },
  DELETE_SHIPMENT: {
    instance: nodeInstance,
    request: {
      url: 'shipment/:waybillnumber',
      method: 'delete',
    },
  },
  CANCEL_SHIPMENT_NOCHARGE: {
    instance: baseInstance,
    request: {
      url: 'portal/cancelshipmentwithnocharge:waybillnumber',
      method: 'post',
    },
  },
  ADD_WALLET_PAYMENT_LOG: {
    instance: baseInstance,
    request: {
      url: 'portal/addwalletpaymentlog',
      method: 'post',
    },
  },
  ADD_RATING: {
    instance: baseInstance,
    request: {
      url: 'portal/addratings',
      method: 'post',
    },
  },
  VERIFY_OTP: {
    instance: baseInstance,
    request: {
      url: 'portal/verifyotp',
      method: 'post',
    },
  },
  RESEND_OTP: {
    instance: baseInstance,
    request: {
      url: 'portal/resendotp',
      method: 'post',
    },
  },
  GET_DROPOFF_PRICE: {
    instance: baseInstance,
    request: {
      url: 'portal/dropoffprice',
      method: 'post',
    },
  },
  CREATE_DROPOFF: {
    instance: baseInstance,
    request: {
      url: 'portal/createdropoff',
      method: 'post',
    },
  },
  CANCEL_DROPOFF: {
    instance: baseInstance,
    request: {
      url: 'portal/dropoffs/:tempcode',
      method: 'delete',
    },
  },
  INTL_SHIPMENT_REQUEST_LIST: {
    instance: baseInstance,
    request: {
      url: 'portal/intlshipmentrequests',
      method: 'post',
    },
  },
  GET_DROP_OFF_LIST: {
    instance: baseInstance,
    request: {
      url: 'portal/dropoffs',
      method: 'post',
    },
  },
  CREATE_INTL_SHIPMENT_REQUEST: {
    instance: baseInstance,
    request: {
      url: 'portal/AddIntlShipmentTransactions',
      method: 'post',
    },
  },
  EDIT_INTL_SHIPMENT_REQUEST: {
    instance: baseInstance,
    request: {
      url: 'portal/intlshipmentrequest/:requestnumber',
      method: 'put',
    },
  },
  GET_INTL_SHIPMENT_MESSAGE: {
    instance: baseInstance,
    request: {
      url: 'portal/intlshipmentsmessage',
      method: 'put',
    },
  },
  PROFILE_INTL_USER: {
    instance: baseInstance,
    request: {
      url: 'portal/profileinternationaluser',
      method: 'put',
    },
  },
  GET_VEHICLE_STATUS: {
    instance: nodeInstance,
    request: {
      url: 'vehicle',
      method: 'get',
    },
  },
  UPLOAD_IMAGE: {
    instance: nodeInstance,
    request: {
      url: 's3upload/image-upload',
      method: 'post',
    },
  },
  HANDLE_SHIPMENT: {
    instance: baseInstance,
    request: {
      url: 'portal/shipment/:waybillnumber',
      method: 'post',
    },
  },
  GET_PARTNER_DETAILS: {
    instance: nodeInstance,
    request: {
      url: 'portal/shipment/:waybillnumber',
      method: 'get',
    },
  },
};

const getApiUrlParams = (url: string): string[] => {
  const urlBits = url?.split('/');
  const params = urlBits?.filter((part) => part.startsWith(':'));
  return params;
};

const replaceParamsWithObject = (
  url: string,
  params: string[],
  urlParams: { [x: string]: string }
): string => {
  let apiUrl = url;
  params?.forEach((param) => {
    const paramName = param.substring(1);
    apiUrl = apiUrl?.replace(param, urlParams[paramName]);
  });
  return apiUrl;
};

export const makeRequest = async (
  api_key: API_KEYS,
  apiOptions?: Omit<AxiosRequestConfig, 'baseurl' | 'url' | 'method'>,
  urlParams?: Datum
) => {
  const api = API_LIBRARY[api_key];
  let apiUrl = api.request.url;

  if (!apiUrl) {
    throw new Error('Invalid API Url');
  }

  if (urlParams) {
    const params = getApiUrlParams(apiUrl);
    if (params.length) {
      apiUrl = replaceParamsWithObject(apiUrl, params, urlParams);
    }
  }

  if (getApiUrlParams(apiUrl).length) {
    throw new Error(`Provide values for ${getApiUrlParams(apiUrl).join(', ')}`);
  }

  try {
    const response = await api.instance.request({
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiJiNDc2ZmVhOC04NGU0LTRjNWItYWM1MS0yZWZkNjg1MjZmZGMiLCJ1bmlxdWVfbmFtZSI6IklORDI2NTkzNiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vYWNjZXNzY29udHJvbHNlcnZpY2UvMjAxMC8wNy9jbGFpbXMvaWRlbnRpdHlwcm92aWRlciI6IkFTUC5ORVQgSWRlbnRpdHkiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImEwMTc3NWUxLTc2ZTMtNDJhNC1hN2RhLWEzOTM2MWViZmY2YiIsInJvbGUiOiJUaGlyZFBhcnR5IiwiQWN0aXZpdHkiOlsiQ3JlYXRlLlRoaXJkUGFydHkiLCJEZWxldGUuVGhpcmRQYXJ0eSIsIlVwZGF0ZS5UaGlyZFBhcnR5IiwiVmlldy5UaGlyZFBhcnR5Il0sImlzcyI6Imh0dHBzOi8vYWdpbGl0eXN5c3RlbWFwaWRldm0uYXp1cmV3ZWJzaXRlcy5uZXQvIiwiYXVkIjoiNDE0ZTE5MjdhMzg4NGY2OGFiYzc5ZjcyODM4MzdmZDEiLCJleHAiOjE2MTY5Mjc2OTcsIm5iZiI6MTYxNjQ5NTY5N30.rs46tko1LsAYZAeUjxhzmZEtziHZAay94AurwEZ9-D4',
      },
      ...api.request,
      url: apiUrl,
      ...apiOptions,
    });
    if (response?.data?.Code !== '200') {
      throw new Error(response?.data?.Code.ShortDescription);
    }
    return response;
  } catch (err) {
    return err;
  }
};
