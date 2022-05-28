(() => {
  class Car {
    private model: string

    constructor(model: string) {
      this.model = model;
    }

    getModel() {
      return this.model;
    }

    setModel(model: string) { // not an arrow function => "this" is specified by the calling context
      this.model = model;
    }

    setModel2 = (model: string) => { // arrow function => captures "this" from the surrounding context (lexically scoped 'this')
      this.model = model;
    }
  }

  const car: Car = new Car("tesla");
  car.setModel("volkswagen"); // setModel's "this" will be the Car instance

  // const setModel = car.setModel;
  // setModel("tesla") // will throw an error because setModel's "this" will be undefined since we're calling the function directly

  // same problem here
  // setTimeout(() => { console.log(`model is ${car.getModel()}`) }, 1000);

  // to avoid these problems, use setModel2, which is a property pointing to an arrow function
  const setModel2 = car.setModel2;
  setModel2("tesla")
  console.log(car.getModel()); // ok, no runtime error
  setTimeout(() => { console.log(`model is ${car.getModel()}`) }, 1000); // ok, no runtime error
})();