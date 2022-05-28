(() => {
  // heads up! the overloaded function don't get transpiled to javascript.
  // the two overloaded methods are shadowing the internal function signature of square(numberOrNumberArray: number | number[])
  function square(num: number): number; // function overloading
  function square(num: number[]): number[]; // function overloading

  // q: why having this kind of signature when you can directly have overloaded functions? q: because the implementation signature describe the intended usage in all possible cases
  // example: union types
  function square(numberOrNumberArray: number | number[]) {
    if (typeof numberOrNumberArray == 'number') {
      return numberOrNumberArray * numberOrNumberArray;
    }

    return numberOrNumberArray.map(n => n * n);
  }

  const res1 = square(5); // if you comment lines 4 and 5, the compiler thinks that res1 is of type number or number[]
  const res2 = square([2, 3]);

  console.log(res1);
  console.log(res2);
})();

(() => {
  function transformString(str: string, shouldUpperCase: boolean, shouldTrim: boolean): string;
  function transformString(str: string): string;

  // example: optional members
  function transformString(str: string, shouldUpperCase?: boolean, shouldTrim?: boolean): string {
    if (shouldUpperCase && shouldTrim) {
      return str.toUpperCase().trim();
    }

    return str;
  }

  const str1 = transformString(' my first string ', true, true);
  // const str2 = transformString(' my second string ', true); // compiler will complain because there is no overload for this variant
  const str3 = transformString(' my third string ');
})();