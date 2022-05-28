(() => {
  // declare the type of a function: method 1
  type MyFunctionType1 = (a: string, b: number, c: Date) => string;

  const myFunction1: MyFunctionType1 = (a: string, b: number, c: Date) => {
    return 'something';
  }

  // declare the type of a function: method 2 -> this is called a call signature
  type MyFunctionType2 = {
    (a: string, b: number, c: Date): string
  }

  const myFunction2: MyFunctionType2 = (a: string, b: number, c: Date) => {
    return 'something';
  }
})();

(() => {
  type MyFunctionType3 = {
    (a: string, b: number): string
    (a: string, b: number, c: Date): string // function overload
  }

  const myFunction3: MyFunctionType3 = (a: string, b: number, c?: Date) => { // heads up! c must be optional
    return 'something';
  }

  // call signatures are similar in terms of syntax with interfaces
  interface MyFunctionType4 {
    (a: string, b: number, c: Date): string
  }

  const myFunction4: MyFunctionType4 = (a: string, b: number, c: Date) => {
    return 'something';
  }
})();

(() => {
  // call signatures work also for class constructor (short form)
  type MyClassConstructorType1 = new (x: number, y: number) => { x: number, y: number };

  const MyClass1: MyClassConstructorType1 = class {
    constructor(public x: number, public y: number) { }
  }

  //call signatures for class constructor (verbose form)
  type MyClassConstructorType2 = {
    new(x: number, y: number): { x: number, y: number };
  }

  const MyClass2: MyClassConstructorType2 = class {
    constructor(public x: number, public y: number) { }
  }
})();
