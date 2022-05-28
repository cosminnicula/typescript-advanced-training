(() => {
  // declaration merging are only available for interfaces, and not for types
  interface Car {
    model: string
  };

  interface Car {
    range: number
  };

  const car: Car = { // the two Car interfaces are merged into a single interface that have all the properties
    model: 'tesla',
    range: 1000
  };

  console.log(`model: ${car.model}, range: ${car.range}`);
})();