import { integerToRoman } from './integerToRoman';

describe('integerToRoman', () => {
  it('should convert 1 to I', () => {
    expect(integerToRoman(1)).toBe("I");
  });

  it('should convert 4 to IV', () => {
    expect(integerToRoman(4)).toBe("IV");
  });

  it('should convert 11 to XI', () => {
    expect(integerToRoman(11)).toBe("XI");
  });

  it('should convert 3999 to MMMCMXCIX', () => {
    expect(integerToRoman(3999)).toBe("MMMCMXCIX");
  });
})