(() => {
  type CarType = {
    model: string,
    range: number
  };

  // the generic constraint "T extends CarType" ensures that the member of type T has the members "model" and "range" of type CarType
  // also, the generic constraint allow accesing car.model and car.range without getting compiler errors
  function getCarWithDescription<T extends CarType>(car: T): T & { description: string } {
    return {
      ...car,
      description: `[Car description] model: ${car.model}, range: ${car.range}`
    }
  }

  (() => {
    const car1 = getCarWithDescription({
      model: 'tesla',
      range: 1000, // if this is omitted, you'll get a compiler error 
      color: 'black' // this is ok
    });

    console.log(car1.color);
    console.log(car1.description);
  })();

  (() => {
    // // compiler error, since this literal object does not have 'model' member
    // const car2 = getCarWithDescription({
    //   model: 'volkswagen',
    // });
  })();
})();