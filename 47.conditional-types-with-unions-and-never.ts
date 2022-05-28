(() => {
  function error(message: string): never {
    throw new Error((message));
  }

  // const notAllowed: never = 'something'; // compiler error: cannot assign a string to a variable of type never

  try {
    const allowed: never = error('something went wrong 1');
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }

  try {
    // this is allowed because the error function never returns and 'allowed' will never be assigned anything other than a string
    // you can assign a never to any other type, which means that never can be considered a member of any other type within TypeScript
    const allowed: string = error('something went wrong 2');
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }

  }
})();

(() => {
  type Verbose = string | never; // is the same with 'type Verbose = string;'
})();

(() => {
  // exclude null and undefined from T
  type NotEmpty<T> = T extends null | undefined ? never : T;

  // if T is a string, it gets mapped to string; if T is null, it gets mapped to never; string | never gets mapped to string, so the following type gets mapped to string
  type ExampleType1 = NotEmpty<string | null>;

  // all types below map to 'string', just like the type above
  type ExampleType2 = NotEmpty<string> | NotEmpty<null>;
  type ExampleType3 =
    (string extends null | undefined ? never : string) |
    (null extends null | undefined ? never : string);
  type ExampleType4 = string | never;
  type ExampleType5 = string;
})();