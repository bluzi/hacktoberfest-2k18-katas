import { generateSquare } from './generateSquare';

describe('generateSquare', () => {
  it('generates an empty array if it is passed 0', () => {
    expect(generateSquare(0)).toEqual([]);
  });

  it('generates a 2x2 array if passed 2', () => {
    // prettier-ignore
    const expected = [
      '**',
      '**',
    ];

    expect(generateSquare(2)).toEqual(expected);
  });

  it('generates a 4x4 array if passed 4', () => {
    // prettier-ignore
    const expected = [
      '****',
      '*  *',
      '*  *',
      '****',
    ];

    expect(generateSquare(4)).toEqual(expected);
  });
});
