export const input = ["name1", "surname1", 90000, 45];

export class Worker {
  #name;
  #surname;
  #rate;
  #days;

  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
  }

  get name() {
    return this.#name;
  }
  get surname() {
    return this.#surname;
  }
  get rate() {
    return this.#rate;
  }
  set rate(rate) {
    this.#rate = rate;
  }
  get days() {
    return this.#days;
  }
  set days(days) {
    this.#days = days;
  }

  getSalary() {
    return this.#rate * this.#days;
  }
}
