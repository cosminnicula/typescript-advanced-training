(() => {
  // type casting is not the same as type assertion
  // type casting is preserved at runtime, while type assertion is not
  let myString1: unknown; // it is mandatory to explicitly declare as unknown, otherwise error will be thrown at runtime 

  myString1 = '123'

  const myNumber1 = myString1 as number; // type assertion is compile-time only, which means that myNumber1 remains '123' at runtime
  console.log(myNumber1); // '123'
  console.log(myNumber1 === 123); // false

  // to cast (convert) a string to a number, use the normal JavaScript tricks
  let myString2;

  myString2 = '123'

  const myNumber2 = +myString2; // TypeScript understands the JavaScript trick to convert the string to a number, and correctly infers it is a number
  console.log(myNumber2); // 123
  console.log(myNumber1 === 123); // true
})();