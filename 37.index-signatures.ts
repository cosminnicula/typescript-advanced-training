(() => {
  // JavaScript allows you to access members of an object, by using arbitrary strings or number indexes
  const car1 = {
    model: 'tesla'
  }

  const model = car1['model'];

  const cars = {
    57: {
      model: 'tesla'
    }
  }

  const car2 = cars[57];
})();

(() => {
  type Car = {
    model: string,
    range: number
  };

  type CarDictionary = {
    [id: number]: Car | undefined
  };

  const cars: CarDictionary = {
    1: { model: 'tesla', range: 1000 }
  };

  cars[2] = { model: 'volkswagen', range: 800 };
  // cars[3] = { model: 'volkswagen', r: 800 }; // compiler error: r is not a member of type Car 

  delete cars[2];

  const car = cars[-1];
  // console.log(car + car.model); // compiler error for car.model: car can be undefined
})();