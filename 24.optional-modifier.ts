(() => {
  // optional modifier is supported on types
  type Car = {
    model: string,
    range: number,
    color?: string
  };

  const car: Car = { // in this case, car.color will be undefined 
    model: 'tesla',
    range: 1000
  };
})();

(() => {
  // optional modifier is also supported on classes
  // class Point {
  //   x: number = 0;
  //   y: number = 0;
  // }
  class Point {
    x?: number
    y?: number;
  }

  const point = new Point();
  console.log(point.x); // undefined

  point.x = 0;
  point.x = undefined;
  // point.x = null; // compiler error: point.x can only be null or undefined; declare 'x' as 'x?: number | null' to get rid of the error
})();