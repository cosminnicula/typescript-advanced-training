(() => {
  type Car = {
    model: string,
    range: number,
    options?: Array<string>
  }

  // '-?' means removing the optional nature of a member
  // '+readonly' means adding the readonly nature to a member; '+readonly' is the same with 'readonly'
  type ReadOnlyWithoutOptionalType<T> = {
    +readonly [P in keyof T]-?: T[P]
  }

  type CarReadOnlyWitoutOptionalType = ReadOnlyWithoutOptionalType<Car> // take a look at this type and compare it with the Car type

  const car: CarReadOnlyWitoutOptionalType = {
    model: 'tesla',
    range: 1000,
    options: ['heathed steering wheel'] // if you try to make options optional, you'll get a compiler error
  }

  // car.range = 900; // compiler error, since it's readonly
})();

(() => {
  class State1<T> {
    constructor(public current: T) { }

    update(next: T) {
      this.current = { ...this.current, ...next };
    }
  }

  const state1 = new State1({ prop1: 'val1', prop2: 'val2' });
  // state1.update({prop2: 'val2'}); // compiler error, because type T was inferred as having the following structure: { prop1: string, prop2: string }

  // to solve the problem, let's mark all the state properties as optional

  type Partial<T> = {
    [P in keyof T]+?: T[P]
  }

  class State2<T> {
    constructor(public current: T) { }

    update(next: Partial<T>) {
      this.current = { ...this.current, ...next };
    }
  }

  const state2 = new State2({ prop1: 'val1', prop2: 'val2' });
  state2.update({ prop2: 'val2' }) // problem solved: no compiler error

  // or simply use the built-in implementation of TypeScript which has a Partial type

  // other built-in types: Required<T>, Record<K, V>
})();