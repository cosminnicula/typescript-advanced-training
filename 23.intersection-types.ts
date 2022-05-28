(() => {
  // intersection types behaves similarly with class inheritance

  // 1st example
  type Point2D = {
    x: number,
    y: number
  };

  type Point3D = Point2D & { // type intersection combines the features of two given types
    z: number
  };

  const point2d: Point2D = {
    x: 0,
    y: 0,
  };

  const point3d: Point3D = {
    x: 0,
    y: 0,
    z: 0,
  };

  console.log(point2d);
  console.log(point3d);
})();

(() => {
  type CarModel = {
    model: string
  }

  type CarRange = {
    range: number
  }

  // you can have multiple types intersection, just like type unions
  type Car =
    & CarModel // leading ampersand is for readability purposes
    & CarRange;

  function logPoint(car: Car) {
    console.log(`model: ${car.model}, range: ${car.range}`);
  }

  logPoint({
    model: 'tesla',
    range: 1000
  })
})();