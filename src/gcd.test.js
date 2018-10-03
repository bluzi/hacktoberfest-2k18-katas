import { gcd } from './gcd';

describe('gcd', () => {
  it('does something', () => {
    expect(gcd(2,8)).toEqual(2); 
  });

  it('does something else', () => {
    expect(gcd(5,9)).toEqual(1); 
  });
  it('does something else', () => {
    expect(gcd(1709,1729)).toEqual(1); 
  });
  it('does something else', () => {
    expect(gcd(11,121)).toEqual(11); 
  });
})
