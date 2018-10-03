import { sieveOfEratosthenes } from './sieveOfEratosthenes';

describe('sieveOfEratosthenes', () => {
  it('finding all prime numbers', () => {
    expect(sieveOfEratosthenes([2,4,6,8])).toEqual([2]);
    expect(sieveOfEratosthenes([2,3,4,5,6,7,8,9,10,11,12,13,14])).toEqual([2,3,5,7,11,13]);
  });

  it('should return null if is not array of digits', () => {
    expect(sieveOfEratosthenes()).toEqual(null);
    expect(sieveOfEratosthenes("qwerty")).toEqual(null);
    expect(sieveOfEratosthenes({t:"test"})).toEqual(null);
  });
})
