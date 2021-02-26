/* eslint-disable no-console */
import { checkPermissions, accessControlFn } from '../accessControl';

const testFn = () => {
  console.log('Test');
};

describe('Access Control Utils', () => {
  it('should grant access', () => {
    expect(checkPermissions(['ADMIN'], ['ADMIN', 'USER'])).toBe(true);
    expect(checkPermissions([], [])).toBe(true);
  });
  it('should deny access', () => {
    expect(checkPermissions(['USER'], ['ADMIN'])).toBe(false);
  });

  it('should grant fn access', () => {
    expect(accessControlFn(['ADMIN'], ['ADMIN', 'USER'], testFn)).toBe(true);
    expect(accessControlFn([], [], testFn)).toBe(true);
  });
  it('should deny fn access', () => {
    expect(accessControlFn(['USER'], ['ADMIN'], testFn)).toBe(false);
  });
});
