(() => {
  // readonly is a compile-time feature, and does not require any runtime JavaScript support
  // readonly applies to types
  type Point = {
    readonly x: number,
    y: number
  }

  const point: Point = {
    x: 0,
    y: 0,
  };

  // point.x = 1; // compiler error: cannot reassign to readonly variable
})();

(() => {
  // readonly also apply to classes
  class Animal {
    public readonly name: string; // by default members are public

    constructor(name: string) {
      this.name = name;
    }
  }

  const animal = new Animal('cat');

  // animal.name = 'dog' // compiler error: cannot reassign to readonly variable
})();