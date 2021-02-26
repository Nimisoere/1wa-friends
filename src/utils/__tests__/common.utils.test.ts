import { format } from 'date-fns';
import * as util from '../common.utils';

const testData = [
  { id: 1, name: 'Nimi', group: 'dev' },
  { id: 2, name: 'Kendall', group: 'PM' },
  { id: 3, name: 'John', group: 'QA' },
  { id: 4, name: 'Gibson', group: 'dev' },
  { id: 5, name: 'Simon', group: 'PM' },
  { id: 6, name: 'Sang', group: 'HA' }
];

const sampleTermsheets = {
  viewed: {
    is_viewed: true,
    is_viewed_date: '1992-09-24T23:59:00z'
  },
  created: {
    is_sent: false,
    created_at: '1992-09-24T23:59:00z'
  },
  none: {},
  sent: {
    is_sent: true,
    is_sent_date: '1992-09-24T23:59:00z'
  },
  recalled: {
    is_recalled: true,
    is_recalled_date: '1992-09-24T23:59:00z'
  },
  approved: {
    is_approved: true,
    is_approved_date: '1992-09-24T23:59:00z'
  },
};

jest.useFakeTimers();

describe('Common Utils Reducer', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should comma a number', () => {
    expect(util.commanumbers(1000)).toBe('1,000');
  });
  it('should format money', () => {
    expect(util.formatMoney(1000, 'USD')).toBe('$1,000.00');
  });
  it('should format money with fractions', () => {
    expect(util.formatMoney(1000, 'USD', 3)).toBe('$1,000.000');
  });
  it('should download a file', () => {
    const spy = jest.spyOn(document, 'createElement');
    const spy2 = jest.spyOn(document.body, 'appendChild');
    const spy3 = jest.spyOn(document.body, 'removeChild');

    const createdLink = document.createElement('a');
    spy.mockReturnValue(createdLink);
    util.downloadFile('test.pdf', 'test2', 'pdf');
    expect(spy).toBeCalledWith('a');
    expect(spy2).toBeCalledWith(createdLink);
    expect(spy3).toBeCalledWith(createdLink);
    expect(createdLink).toHaveAttribute('href');
    expect(createdLink).toHaveAttribute('download');
    expect(createdLink.download).toBe('test2.pdf');
    expect(createdLink.href).toContain('test.pdf');

  });
  it('should copy to clipboard', () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: () => { },
      },
    });
    const navigatorSpy = jest.spyOn(navigator.clipboard, 'writeText');
    util.copyToClipboard('copy me');
    if (navigatorSpy) {
      expect(navigatorSpy).toBeCalledWith('copy me');
    } else {
      const spy = jest.spyOn(document, 'createElement');
      const createdElement = document.createElement('textarea');
      spy.mockReturnValue(createdElement);
      expect(spy).toBeCalledWith('textarea');
    }
  });
  it('should render status', () => {
    expect(util.renderStatus('NS')).toBe('Not Started');
    expect(util.renderStatus('IN_PROGRESS')).toBe('In Progress');
    expect(util.renderStatus('COMPLETED')).toBe('Completed');
    expect(util.renderStatus('VERIFIED')).toBe('Verified');
    expect(util.renderStatus('Test')).toBe('Test');
  });
  it('should render Ordinal Suffix', () => {
    expect(util.ordinalSuffixOf(1)).toBe('1st');
    expect(util.ordinalSuffixOf(2)).toBe('2nd');
    expect(util.ordinalSuffixOf(3)).toBe('3rd');
    expect(util.ordinalSuffixOf(4)).toBe('4th');
  });
  it('should title case', () => {
    expect(util.titleCase('test string')).toBe('Test String');
    expect(util.titleCase('TEST STRING')).toBe('TEST STRING');
    expect(util.titleCase('TEST STRING', true)).toBe('Test String');
  });
  it('should count decimal places', () => {
    expect(util.countDecimals(2000)).toBe(0);
    expect(util.countDecimals(2300.303)).toBe(3);
    expect(util.countDecimals(2300.3000)).toBe(1);
  });
  it('should get date', () => {
    expect(util.getDate('1992-09-24T23:50:00')).toStrictEqual(new Date(1992, 8, 24));
  });
  it('should check if user is disengaged', () => {
    expect(util.isDisengaged('ENGAGED')).toBe(false);
    expect(util.isDisengaged('PENDING')).toBe(false);
    expect(util.isDisengaged('SNOOZED')).toBe(false);
    expect(util.isDisengaged(null)).toBe(false);
    expect(util.isDisengaged('DISENGAGED')).toBe(true);
    expect(util.isDisengaged('WITHDRAWN')).toBe(true);
    expect(util.isDisengaged('REJECTED')).toBe(true);
  });
  it('should get URL Params', () => {
    const params = {
      userId: '100',
      offerId: '10000',
      status: 'lead',
      actiontype: 'REJECTED'
    };
    expect(util.getUrlParams(params)).toStrictEqual({
      userId: 100,
      offerId: 10000,
      status: 'lead',
      actiontype: 'REJECTED'
    });
  });
  it('should handle API Error', () => {
    expect(util.handleApiError({
      response: {
        data: 'Error'
      }
    })).toStrictEqual({
      status: 'error',
      message: 'Error'
    });
  });
  it('should group test data', () => {
    expect(util.groupBy(testData, 'group')).toStrictEqual({
      PM: [
        { id: 2, name: 'Kendall', group: 'PM' },
        { id: 5, name: 'Simon', group: 'PM' },
      ],
      QA: [
        { id: 3, name: 'John', group: 'QA' },
      ],
      dev: [
        { id: 1, name: 'Nimi', group: 'dev' },
        { id: 4, name: 'Gibson', group: 'dev' },
      ],
      HA: [{ id: 6, name: 'Sang', group: 'HA' }]
    });
    expect(util.groupBy(
      testData, (item: any) => item.group.toLowerCase()
    )).toStrictEqual({
      pm: [
        { id: 2, name: 'Kendall', group: 'PM' },
        { id: 5, name: 'Simon', group: 'PM' },
      ],
      qa: [
        { id: 3, name: 'John', group: 'QA' },
      ],
      dev: [
        { id: 1, name: 'Nimi', group: 'dev' },
        { id: 4, name: 'Gibson', group: 'dev' },
      ],
      ha: [{ id: 6, name: 'Sang', group: 'HA' }]
    });
  });
  it('should call functions at interval', () => {
    const func = jest.fn();
    const delayedFn = util.debounce(func, 1000);
    delayedFn();
    expect(func).toHaveBeenCalledTimes(0);
    for (let i = 0; i < 100; i++) {
      delayedFn();
    }
    jest.runAllTimers();
    expect(func).toBeCalledTimes(1);
  });
  it('should render timestamps PO', () => {
    expect(util.renderTermsheetTimeStampsPO(sampleTermsheets.viewed))
      .toBe(`Client viewed ${format(
        new Date(sampleTermsheets.viewed.is_viewed_date),
        'MM/dd/yyyy - hh:mmaa (O)'
      ).replace('GMT', 'UTC')}`);
    expect(util.renderTermsheetTimeStampsPO(sampleTermsheets.approved))
      .toBe(`Client accepted ${format(
        new Date(sampleTermsheets.approved.is_approved_date),
        'MM/dd/yyyy - hh:mmaa (O)'
      ).replace('GMT', 'UTC')}`);
    expect(util.renderTermsheetTimeStampsPO(sampleTermsheets.sent))
      .toBe('');
  });
  it('should render timestamps HA', () => {
    expect(util.renderTermsheetTimeStampsHA(sampleTermsheets.recalled))
      .toBe(`Recalled ${format(
        new Date(sampleTermsheets.recalled.is_recalled_date),
        'MM/dd/yyyy - hh:mmaa (O)'
      )}`);
    expect(util.renderTermsheetTimeStampsHA(sampleTermsheets.created))
      .toBe(`Created ${format(
        new Date(sampleTermsheets.created.created_at),
        'MM/dd/yyyy - hh:mmaa (O)'
      )}`);
    expect(util.renderTermsheetTimeStampsHA(sampleTermsheets.sent))
      .toBe(`Sent ${format(
        new Date(sampleTermsheets.sent.is_sent_date),
        'MM/dd/yyyy - hh:mmaa (O)'
      )}`);
    expect(util.renderTermsheetTimeStampsHA(sampleTermsheets.none))
      .toBe('');
  });
});
