import { replaceChars } from './replaceChars';

describe('replaceChars', () => {
  it('replace char in the string with another', () => {
    expect(replaceChars("aabb ccdd", "b", "-")).toEqual("aa-- ccdd");
    expect(replaceChars("Hi! I'm a new string!", " ", "  ")).toEqual("Hi!  I'm  a  new  string!");
    expect(replaceChars("01234567", "a", "b")).toEqual("01234567");
  });

  it('return null if input isn't string, () => {
    expect(replaceChars()).toEqual(null);
    expect(replaceChars(123, "2", "4")).toEqual(null);
  });
})