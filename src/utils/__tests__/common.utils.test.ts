import * as util from '../common.utils';

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
        writeText: () => {},
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
});
