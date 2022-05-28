(() => {
  // primitive types: boolean, number, string, undefined, null, symbol, bigint

  const myBoolean: boolean = false;
  const myBigInt: symbol = Symbol('a');

  // instance types: RegExp, array / Array<number>, Set / Set<number>, Class Queue<T>, WeakMap etc.

  const myRegExp = new RegExp('[abc]');
  const myArray: Array<number> = [1, 2, 3];
})();