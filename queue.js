class Queue {
  constructor(initialElements = []) {
    this.elements = initialElements;
  }

  adicionaItemFila(item) {
    this.elements.push(item);
  }

  removePrimeiroItem() {
    return this.elements.shift();
  }

  retornaPrimeiroItem() {
    return this.elements[0];
  }

  getTamanho() {
    return this.elements.length;
  }
}

module.exports = Queue;
