export const input = {
  calculationLine: "1+4",
  lastSymbol: "+",
};

export class Calculation {
  #calculationLine;
  constructor(calculationLine) {
    this.#calculationLine = calculationLine;
  }

  get calculationLine() {
    return this.#calculationLine;
  }
  set calculationLine(calculationLine) {
    this.#calculationLine = calculationLine;
  }

  setLastSymbolCalculationLine(symbol) {
    this.#calculationLine = this.#calculationLine + symbol;
  }

  get lastSymbol() {
    return this.#calculationLine.slice(-1);
  }

  deleteLastSymbol() {
    this.#calculationLine = this.#calculationLine.slice(0, -1);
  }
}
