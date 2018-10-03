import { nextPowerOfTwo } from './nextPowerOfTwo';

describe('nextPowerOfTwo', () => {

  it('2 is nextPowerOfTwo for -20', () => {
    expect(nextPowerOfTwo(-20)).toEqual(0);
  });

  it('2 is nextPowerOfTwo for 0', () => {
    expect(nextPowerOfTwo(0)).toEqual(0);
  });

  it('2 is nextPowerOfTwo for 2', () => {
    expect(nextPowerOfTwo(2)).toEqual(2);
  });

  it('4 is nextPowerOfTwo for 3', () => {
    expect(nextPowerOfTwo(3)).toEqual(4);
  });

  it('8 is nextPowerOfTwo for 6', () => {
    expect(nextPowerOfTwo(6)).toEqual(8);
  });

  it('1024 is nextPowerOfTwo for 789', () => {
    expect(nextPowerOfTwo(789)).toEqual(1024);
  });

  it('4096 is nextPowerOfTwo for 2049', () => {
    expect(nextPowerOfTwo(789)).toEqual(1024);
  });
})
