const Calculadora = require("./calculadora");

describe("Calculadora", () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  it("Deverá retornar a soma de dois números", () => {
    expect(calculadora.soma(2, 2)).toBe(4);
  });

  it("Deverá retornar a subtração de dois números", () => {
    expect(calculadora.subtracao(10, 2)).toBe(8);
  });

  it("Deverá retornar a multiplicação entre dois números", () => {
    expect(calculadora.multiplicacao(5, 5)).toBe(25);
  });

  it("Deverá retornar a divisao entre dois números", () => {
    expect(calculadora.divisao(100, 10)).toBe(10);
  });
});
