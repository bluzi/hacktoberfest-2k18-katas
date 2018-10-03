import { firstRecurringChar } from './firstRecurringChar';

describe('firstRecurringChar', () => {
  it('returns the first recurring character', () => {
    expect(firstRecurringChar('foo')).toBeEqual('o');
  });

  it('returns the first recurring char of lowest index', () => {
    expect(firstRecurringChar('baarfoo')).toBeEqual('a');
  });

  it('returns null otherwise', () => {
    expect(firstRecurringChar(123)).toBeEqual(null);
    expect(firstRecurringChar({xyz : 123})).toBeEqual(null);
    expect(firstRecurringChar()).toBeEqual(null);
    expect(firstRecurringChar(null)).toBeEqual(null);
    expect(firstRecurringChar(undefined)).toBeEqual(null);
  });

})
