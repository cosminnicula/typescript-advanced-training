(() => {
  //annotate parameters and return type of a function
  function add(a: number, b: number): number {
    return a + b;
  }

  function log(message: string): void { // if omitted, void is the default return type
    console.log(message);
  }

  function sum(...values: number[]) { // declaring the rest parameter type as number[]
    return values.reduce((prev, curr) => {
      return prev + curr;
    });
  }

  console.log(sum(1, 2, 3));
})();

(() => {
  // function types
  type Add = (a: number, b: number) => number;

  let add: Add;

  add = function (a: number, b: number): number {
    return a + b;
  }
})();