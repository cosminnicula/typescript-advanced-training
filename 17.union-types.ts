(() => {

  // union types are more specific than unknown type: instead of having input: unknown and checking its type at runtime, use input: string | string[] to have compile-time safety
  function formatInput(input: string | string[]) { // inline union type
    if (typeof input === 'string') {
      console.log(input);
    } else {
      console.log(input.map((s) => s.trim()).join(' '));
    }
  }

  formatInput('something');
  formatInput(['something', 'something else']);
  // formatInput(123); // compiler error

  //group union types into its own type
  type MyUnionType =
    | number
    | string;
  // or type MyUnionType = number | string;
  const input: MyUnionType = "something";
})();
