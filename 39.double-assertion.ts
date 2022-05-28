(() => {
  type Point2D = { x: number, y: number };
  type Point3D = { x: number, y: number, z: number };
  type Car = {
    model: string,
    range: number
  };

  let point2d = { x: 0, y: 0 };
  let point3d = { x: 0, y: 0, z: 0 };
  let car = { model: 'tesla', range: 1000 };


  point2d = point3d;
  // point3d = point2d; // compiler error
  point3d = point2d as Point3D; // no compiler error

  // "as" cannot be used on completely different types
  // point3d = car as Point3D; // compiler error, even though car and point3d are completely different types; this is because their structure have nothing in common
  point3d = car as unknown as Point3D; // no compiler error: this is a double assertion
})();