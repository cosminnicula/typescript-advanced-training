(() => {
  interface MyInterface {
    prop1: 'val1' | 'val2'
    prop2: number,
    method: (param: string) => number
  };

  // vs

  type prop1Type = 'val1' | 'val2';
  type Prop2Type = number;
  type MethodType = (param: string) => number;

  type MyType = {
    prop1: prop1Type,
    prop2: Prop2Type,
    method: MethodType
  };

  // types support: unions, intersections, primitives, shorthand functions, advanced type function
  // interfaces support: declaration merging, familiarity (extends)
})();