(() => {
  // const assertions are just hints that increase type safety by limiting the mutability
  // as const does the following things:
  // - converts any primitives to their literal types
  // - any members of any object to readonly members
  // - any arrays to readonly tuples

  const car = {
    model: 'tesla', // "as const" transforms behind the scenes to: readonly model: 'tesla'
    dealers: ['dealer1', 'dealer2'] // "as const" transforms behind the scenes to: readonly dealers: readonly ['dealer1', 'dealer2']
  } as const;

  // car.model = 'volkswagen'; // compiler error because car's "as const" declaration
})();

(() => {
  function myFunction(param: {
    prop1: 'val1' | 'val2' | 'val3',
    prop2: number
  }) { }

  const obj1 = {
    prop1: 'val1',
    prop2: 123
  };

  // myFunction(obj1); // compiler error: the compiler inferred that obj.prop1 is of type string, and string is not compatible with the literal types 'val1' | 'val2' | 'val3'

  // to fix the problem use as const
  const obj2 = {
    prop1: 'val2',
    prop2: 456
  } as const;

  // or

  const obj3 = {
    prop1: 'val3' as const,
    prop2: 789
  };

  myFunction(obj2); // the compiler correctly infers that obj.prop1 is of literal type "val2"
  myFunction(obj3);
})();