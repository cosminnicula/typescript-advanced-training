(() => {
  type CarType = {
    model: string,
    range: number,
    class: {
      name: string,
      code: string
    }
  };

  type CarClassType = CarType['class'] // lookup type

  function getOwner(car: CarType): CarClassType { // the return value should have the same structure as CarType['class']
    return {
      name: car.class.name,
      code: car.class.code
      // someOtherProperty: 123 // compiler error
    };
  };
})();

(() => {
  type CarType = {
    model: string,
    range: number,
    class: {
      name: string,
      code: string
    },
    options: {
      name: string,
      value: string
    }[]
  };

  type CarOptionType = CarType['options'][0]; // this type will have only the name and value properties
})();