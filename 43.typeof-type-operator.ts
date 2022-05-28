(() => {
  // json
  // {
  //   "model": "tesla",
  //   "range": 1000
  // }

  // copy+paste previous json
  const myCar1 = {
    "model": "tesla",
    "range": 1000
  }

  type CarType = typeof myCar1;

  // now you can instantiate another car of type CarType
  const myCar2: CarType = {
    model: 'volkswagen',
    range: 800
  };
})();
