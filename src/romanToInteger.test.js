import { romanToInteger } from './romanToInteger';

describe('romanToInteger', () => {
  it('should convert I to 1', () => {
    expect(romanToInteger("I")).toBe(1);
  });

  it('should convert IV to 4', () => {
    expect(romanToInteger("IV")).toBe(4);
  });

  it('should convert XI to 11', () => {
    expect(romanToInteger("XI")).toBe(11);
  });

  it('should convert MMMCMXCIX to 3999', () => {
    expect(romanToInteger("MMMCMXCIX")).toBe(3999);
  });
})
