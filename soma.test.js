const soma = require("./soma");

describe("Soma", () => {
  it("deverá somar dois números inteiros", () => {
    expect(soma(8, 8)).toBe(16);
  });
});
