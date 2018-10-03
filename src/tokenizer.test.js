import { tokenizer } from './tokenizer';

/**
 * This is the first step towards implementing an interpreter.
 * "Tokenization" simply means transforming a sequence of characters
 * into a sequence of tokens. This tokens are then fed into another
 * step of the compiler/interpreter: the parser.
 *
 * What I'm proposing you today, is to implement that first step
 * by yourself (it's fun I promise)
 */

describe('tokenizer', () => {
  it('tokenizes a simple arithmetic expression', () => {
    const expression = '10+20*5';
    const tokens = [
      { type: 'number', lexeme: '10', literal: 10 },
      { type: 'plus', lexeme: '+', literal: null },
      { type: 'number', lexeme: '10', literal: 20 },
      { type: 'star', lexeme: '*', literal: null },
      { type: 'number', lexeme: '10', literal: 5 },
    ];

    expect(tokenize(expression)).toEqual(tokens);
  });

  it('tokenizes a simple arithmetic expression ignoring whitespaces', () => {
    const expression = '10  +\t20\t\t*  5';
    const tokens = [
      { type: 'number', lexeme: '10', literal: 10 },
      { type: 'plus', lexeme: '+', literal: null },
      { type: 'number', lexeme: '10', literal: 20 },
      { type: 'star', lexeme: '*', literal: null },
      { type: 'number', lexeme: '10', literal: 5 },
    ];

    expect(tokenize(expression)).toEqual(tokens);
  });

  it('tokenizes a small snippet of javascript code', () => {
    const expression = 'const a = 123;';
    const tokens = [
      { type: 'const', lexeme: 'const', literal: null },
      { type: 'identifier', lexeme: 'a', literal: null },
      { type: 'equal', lexeme: '=', literal: null },
      { type: 'number', lexeme: '123', literal: 123 },
      { type: 'semicolon', lexeme: ';', literal: null },
    ];

    expect(tokenize(expression)).toEqual(tokens);
  });

  it('tokenizes another small snippet of javascript code', () => {
    const expression = 'const b = "hello world";';
    const tokens = [
      { type: 'const', lexeme: 'const', literal: null },
      { type: 'identifier', lexeme: 'b', literal: null },
      { type: 'equal', lexeme: '=', literal: null },
      { type: 'string', lexeme: '"hello world"', literal: 'hello world' },
      { type: 'semicolon', lexeme: ';', literal: null },
    ];

    expect(tokenize(expression)).toEqual(tokens);
  });
});
