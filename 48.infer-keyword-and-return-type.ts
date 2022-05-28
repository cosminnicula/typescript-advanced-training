(() => {
  type IsArray<T> = T extends Array<any> ? 'array' : 'other';

  type WithArray = IsArray<string[]>;
  type WithNotArray = IsArray<number>;
})();

(() => {
  type UnboxArray<T> = T extends Array<infer Member> ? Member : T;

  type UnboxedStringArray = UnboxArray<string[]>; // type string
  type UnboxedNumberArray = UnboxArray<number[]>; // type number
  type AnythingElse1 = UnboxArray<string>; // type string
  type AnythingElse2 = UnboxArray<object>; // type object
  type AnythingElse3 = UnboxArray<undefined>; // type undefined
})();

(() => {
  function getCarDetails(model: string, range: number) {
    return {
      model,
      range,
      description: `[Car description] model: ${model}, range: ${range}`
    }
  }

  // T extends (...args: any) tells the compiler that the type should extend a function; if true, then infer the return type, otherwise return never
  type InferredReturnTypeUtil<T> = T extends (...args: any) => infer R ? R : never;

  type CarDescription1 = InferredReturnTypeUtil<typeof getCarDetails>

  const car1: CarDescription1 = {
    model: 'tesla',
    range: 1000,
    description: 'something'
  }

  // or simpler, using the ReturnType built-in type

  type CarDetails2 = ReturnType<typeof getCarDetails>;

  const car2: CarDetails2 = {
    model: 'tesla',
    range: 1000,
    description: 'something'
  }

  // or even simpler, by using ReturnType inline
  const car3: ReturnType<typeof getCarDetails> = {
    model: 'tesla',
    range: 1000,
    description: 'something'
  }

  // this is useful when the input of one function depend on the output on another function (you can generate the type on the fly)
})();