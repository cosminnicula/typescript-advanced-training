(() => {
  // class Car {
  //   public type: string;
  //   public range: number;

  //   constructor(type: string, range: number) {
  //     this.type = type;
  //     this.range = range;
  //   }
  // }

  // or use class parameter properties
  // class parameters allows getting rid of parameters declaration and initialization in the constructor
  class Car {
    constructor(public type: string, public range: number) { }
  }

  const car = new Car('tesla', 1000);
  console.log(car.type);
  console.log(car.range);
})();