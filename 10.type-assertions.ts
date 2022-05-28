(() => {
  function getHello(): unknown {
    return '  hello!';
  }

  let hello = getHello();
  // hello.trim() // compiler error

  // fix 1: check the type; however this is a runtime check (it gets compiled to actual JavaScript code) and might impact performance
  if (typeof hello === 'string') {
    const trimmed = hello.trim();
    console.log(trimmed);
  }

  // fix 2: type assertion tells the compiler the type of the value, without letting the compiler do type inference, or without relying on runtime type checks
  console.log((hello as string).trim());
  // or
  console.log((<string>hello).trim()); // does not work in .tsx files
})();