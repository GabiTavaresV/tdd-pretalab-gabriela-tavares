const Queue = require("./queue");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue([1, 2, 3]);
  });

  it("Deve criar uma fila", () => {
    expect(queue).toEqual({ elements: [1, 2, 3] });
  });

  it("Deve ser capaz de calcular o tamanho da fila", () => {
    expect(queue.getTamanho()).toBe(3);
  });

  it("Deve ser capaz de adicionar um item na fila", () => {
    queue = new Queue([1, 2, 3]);
    queue.adicionaItemFila(4);
    expect(queue.elements).toEqual([1, 2, 3, 4]);
  });

  it("Deve escolher o primeiro item da fila", () => {
    expect(queue.retornaPrimeiroItem()).toEqual(1);
  });

  it("Deve remover o primeiro item da fila", () => {
    expect(queue.removePrimeiroItem()).toBe(1);
    expect(queue.elements).toEqual([2, 3]);
  });
});
