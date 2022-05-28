(() => {

  type CarType = {
    model: string,
    range: number
  }

  (() => {
    // rather than duplicating the keys like this...
    // function getCarInfo(obj: CarType, key: 'model' | 'range') {
    //   const info = obj[key];
    //   return info;
    // }

    // you can do like this
    type CarKeysType = keyof CarType; // the 'keyof' operator returns an union of the keys of that type
    function getCarInfo(obj: CarType, key: CarKeysType) {
      const info = obj[key];
      return info;
    }

    const car: CarType = {
      model: 'tesla',
      range: 1000
    }

    const model = getCarInfo(car, 'model') // the return type is correctly inferred as being string | number, based on the CarType definition
    console.log(model);
    // getCarInfo(car, 'asd'); // compiler error: 'asd' is not a key of CarType
  })();

  (() => {
    // utility function for getting any value of a member of any type
    function getterUtil<Obj, Key extends keyof Obj>(obj: Obj, key: Key) { // the return type is correctly inferred as being Obj[Key]
      const info = obj[key];
      return info;
    }

    const car: CarType = {
      model: 'tesla',
      range: 1000
    }

    const model2 = getterUtil(car, 'model') // the return type is correctly inferred as being string
    console.log(model2);
  })();

  (() => {
    // utility function for setting any value for a member of any type
    // keyof Obj returns a union of the keys of the Obj type
    // Key extends keyof Obj is a generic constriant
    function setterUtil<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]) {
      obj[key] = value;
    }

    const car: CarType = {
      model: 'tesla',
      range: 1000
    }

    setterUtil(car, 'model', 'volkswagen'); // the type of value parameter is correctly inferred as being string
    setterUtil(car, 'range', 800); // the type of value parameter is correctly inferred as being number
    // setCarInfo(car1, 'asd', 123); // compiler error: 'asd' is not a key of CarType
  })();
})();