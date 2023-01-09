// cada vez que se llame a esta constate va a ir a buscar el archivo de fizzbuzz.js
const fizzbuzz = require("../src/fizzbuzz");

describe("function fizzbuzz", () => {
  it("function declared", () => {
    expect(typeof fizzbuzz).toBe("function");
  });
  it("function return fizz if the number is divided 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
  });
  it("function return buzz if the number is divided of 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
  });
  it("function return fizzbuzz if the number is divided of 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(30)).toBe("fizzbuzz");
    expect(fizzbuzz(45)).toBe("fizzbuzz");
  });
  it("function return same number if the number is NOT divided of 3 and 5", () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(4)).toBe(4);
  });
});
