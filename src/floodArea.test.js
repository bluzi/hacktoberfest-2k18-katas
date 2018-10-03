import { floodArea } from './floodArea';

describe('floodArea', () => {
  it('floods inside a basic area', () => {
    // prettier-ignore
    const area = [
      '+--------+',
      '|        |',
      '|        |',
      '+--------+',
    ];

    // prettier-ignore
    const flooded = [
      '+--------+',
      '|~~~~~~~~|',
      '|~~~~~~~~|',
      '+--------+',
    ];

    expect(floodArea(area, 1, 1)).toEqual(flooded);
  });

  it('floods inside a split area', () => {
    // prettier-ignore
    const area = [
      '+--------+',
      '|   |    |',
      '|   |    |',
      '+--------+',
    ];

    // prettier-ignore
    const flooded = [
      '+--------+',
      '|   |~~~~|',
      '|   |~~~~|',
      '+--------+',
    ];

    expect(floodArea(area, 7, 2)).toEqual(flooded);
  });

  it('floods outside an area', () => {
    // prettier-ignore
    const area = [
      '          ',
      '  +---+   ',
      '  |   |   ',
      '  +---+   ',
    ];

    // prettier-ignore
    const flooded = [
      '~~~~~~~~~~',
      '~~+---+~~~',
      '~~|   |~~~',
      '~~+---+~~~',
    ];

    expect(floodArea(area, 5, 0)).toEqual(flooded);
  });
});
