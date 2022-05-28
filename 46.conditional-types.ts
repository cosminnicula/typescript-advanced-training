(() => {
  // JavaScript conditional types work with runtime values
  const isNumber = (value: unknown) => {
    return typeof value === 'number' ? 'number' : 'other';
  }

  const withNumber = isNumber(123); // withNumber1 is of type 'number' | 'other'
  const withOther = isNumber('something');
})();

(() => {
  // TypeScript conditional types work at compile time
  type IsNumber<T> = T extends number ? 'number' : 'other'

  type withNumber = IsNumber<number>; // withNumber2 is of type 'number'
  type withOther = IsNumber<string>; // withNumber2 is of type 'other'
})();

(() => {
  type TypeName<T> =
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends symbol ? 'symbol' :
    T extends bigint ? 'bigint' :
    T extends Function ? 'function' :
    T extends null ? 'null' :
    'object';

  function typeName<T>(t: T): TypeName<T> {
    // in JavaScript, typeof null is object; to fix this problem, use the following
    if (t === null) {
      return 'null' as TypeName<T>;
    }

    return typeof t as TypeName<T>; // heads up! TypeName<T> is inferring at compile time what JavaScript 'typeof t' will do at runtime
  }

  const str = typeName('asd'); // correctly infers at compile-time what the type will be at runtime (in this case 'string')
  const num = typeName(123);
  const bool = typeName(true);
  const undef = typeName(undefined);
  const sym = typeName(Symbol('symbol'));
  const big = typeName(50n);
  const func = typeName(() => { });
  const nil = typeName(null);
})();