(() => {
  function transform(arr: number[]) {
    return arr.sort().reverse();
  }

  const myArray = [1, 2, 3];
  const myTransformedArray = transform(myArray);

  console.log(myArray); // heads up! the function mutated the original array; see below how to fix this problem
})();

(() => {
  function transform(arr: readonly number[]) {
    return arr.slice().sort().reverse(); // without slice which creates a new instance of the array, the compiler will complain
  }

  const myArray = [1, 2, 3];
  const myTransformedArray = transform(myArray);

  console.log(myArray);
  console.log(myTransformedArray);
})();

(() => {
  type shortReadonlyArraySyntax = readonly number[];
  type alternativeReadonlyArraySyntax = ReadonlyArray<number>; // ReadonlyArray is a built-in type
})();

(() => {
  type MyTuple = readonly [number, number];

  function changeTuple(tuple: MyTuple): MyTuple {
    // tuple[0] = tuple[0] + 1; // compiler error: read-only property
    // return tuple;

    return [tuple[0] + 1, tuple[1]]; // ok, retruns a new tuple
  };
})();
