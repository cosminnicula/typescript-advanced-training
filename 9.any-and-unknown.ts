(() => {
  // any and unknown are universal supertypes in TypeScript
  // unannotated types are inferred to be any
  // for quick and dirty refactoring to TypeScript, use any

  let anyValue: any;
  // any: allows you to completely bypass the type system
  anyValue = 1;
  anyValue = "any";
  const booleanType: boolean = anyValue; // heads up! anyValue equals to "any", which is a string => booleanType will be of type string
  const stringType = anyValue?.someProperty?.myFunction()
  console.log(booleanType);
  console.log(typeof (booleanType));
  console.log(stringType);
})();

(() => {
  let unknownValue: unknown;

  // unknown is a more type safe version of any; it still allows access to all members of a type, but in safe manner
  // for proper and reliable refactoring to TypeScript, use unknown
  unknownValue = 2;
  unknownValue = "unknown";

  // const booleanType: boolean = unknownValue // compiler error: cannot assigned to well defined types without further checks
  // const stringType =  unknownValue?.someProperty?.myFunction() // compiler error: cannot access any properties on it

  // assign to a well defined type by checking its type first
  if (typeof unknownValue == 'boolean') {
    const booleanType: boolean = unknownValue;
    console.log(booleanType);
  }

  // access a property by checking its type first 
  if (typeof unknownValue == 'string') {
    // const stringType =  unknownValue?.someProperty?.myFunction() // compiler error: someProperty does not exists on string type
    const stringType = unknownValue?.toString();
    console.log(stringType);
  }
})();