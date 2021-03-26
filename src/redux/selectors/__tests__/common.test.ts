import moxios from 'moxios';
import axios from 'axios';
import * as selector from '../common';
import { thunkTestObject } from '../../../utils/test.util';
import { activityLogResponse } from '../../../__mocks__/applicantMocks';
import { API_KEYS } from '../../../interfaces';
import { initialState, initialFetchState } from '../../actions/types';

const { mockStore } = thunkTestObject();
const store = mockStore({
  ...initialState,
  apiRequest: {
    ACTIVITY_LOGS: {
      loading: false,
      success: true,
      request: { offerId: 1 },
      response: activityLogResponse,
      error: null      
    },
    INLINE_NOTES_PASSPORT: {
      loading: false,
      success: true,
      request: { offerId: 1 },
      response: activityLogResponse,
      error: null    
    },
    INLINE_NOTES_PAYSTUB: {
      loading: false,
      success: true,
      request: { offerId: 1 },
      response: activityLogResponse,
      error: null    
    }
  }
});
describe('Common Selectors', () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('should get api state', async () => {
    expect(selector.getApiState(
      store.getState(), API_KEYS.ACTIVITY_LOGS
    )).toStrictEqual({
      loading: false,
      success: true,
      request: { offerId: 1 },
      response: activityLogResponse,
      error: null      
    });
  });
  it('should get api state', async () => {
    const initialStore = mockStore(initialState);
    expect(selector.getApiState(
      initialStore.getState(), API_KEYS.ACTIVITY_LOGS
    )).toStrictEqual(initialFetchState);
  });
  it('should get api keys state', async () => {
    expect(selector.getApiKeysState(
      store.getState(), 
      API_KEYS.INLINE_NOTES,
      ['PASSPORT', 'PAYSTUB']
    )).toStrictEqual({
      PASSPORT: {
        loading: false,
        success: true,
        request: { offerId: 1 },
        response: activityLogResponse,
        error: null  
      },
      PAYSTUB: {
        loading: false,
        success: true,
        request: { offerId: 1 },
        response: activityLogResponse,
        error: null  
      }    
    });
  });
  it('should get api keys state', async () => {
    const initialStore = mockStore(initialState);
    expect(selector.getApiKeysState(
      initialStore.getState(), 
      API_KEYS.INLINE_NOTES,
      ['PASSPORT', 'PAYSTUB']
    )).toStrictEqual({
      PASSPORT: initialFetchState,
      PAYSTUB: initialFetchState   
    });
  });
  it('should get api keys state all', async () => {
    expect(selector.getApiKeysStateAll(
      store.getState(), 
      API_KEYS.INLINE_NOTES,
    )).toStrictEqual({
      INLINE_NOTES_PASSPORT: {
        loading: false,
        success: true,
        request: { offerId: 1 },
        response: activityLogResponse,
        error: null  
      },
      INLINE_NOTES_PAYSTUB: {
        loading: false,
        success: true,
        request: { offerId: 1 },
        response: activityLogResponse,
        error: null  
      }    
    });
  });
  it('should get api keys state all', async () => {
    const initialStore = mockStore(initialState);
    expect(selector.getApiKeysStateAll(
      initialStore.getState(), 
      API_KEYS.INLINE_NOTES,
    )).toStrictEqual({});
  });
});
