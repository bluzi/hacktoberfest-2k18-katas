import { addKeyAndValueToObject } from "./addKeyAndValueToObject";

describe("addKeyAndValueToObject", () => {
  it("returns object with newKey key", () => {
    const inputObject = {};
    const actual = addKeyAndValueToObject(inputObject, 'newKey', 'newValue');
    expect(actual).toHaveProperty('newKey');
  });

  it("returns object with newKey key and with value newValue", () => {
    const myObject = {};
    const actual = addKeyAndValueToObject(myObject, 'myKey', 'myValue');
    const expected = { myKey: 'myValue' };
    expect(actual).toHaveProperty('myKey', 'myValue');
  });

  it("returns complex object with newKey key and with value newValue", () => {
    const complexObject = {
        number: 123,
        string: "Hello there.",
        url: "https://github.com/rgehan/hacktoberfest-2k18-katas/pull/96" 
    };
    
    const expected = {
            number: 123,
            string: "Hello there.",
            url: "https://github.com/rgehan/hacktoberfest-2k18-katas/pull/96",
            myKey: "myValue"
    };

    const actual = addKeyAndValueToObject(complexObject, 'myKey', 'myValue');
    expect(actual).toEqual(expected);
  });
});
