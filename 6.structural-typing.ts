(() => {
  // same structure (TypeScript's type system is structural and doesn't care about the name of the types)
  type User = { id: string };
  type Product = { id: string };

  let user: User = { id: '123' }
  let product: Product = { id: '456' };

  user = product; // ok, because they have the same structure
  product = user;
})();

(() => {
  // additional structure
  type Point2D = { x: number, y: number };
  type Point3D = { x: number, y: number, z: number };

  let point2d: Point2D = { x: 0, y: 0 };
  let point3d: Point3D = { x: 0, y: 0, z: 0 };

  // additional structure: example 1
  point2d = point3d; // ok, because Point3D is actually Point2D + additional structure
  console.log(point2d.x)
  console.log(point2d.y)
  // console.log(point2d.z) // compiler error
  function needsPoint2D(point: Point2D) { }
  needsPoint2D(point3d); // ok

  // additional structure: example 2
  // point3d = point2d // compiler error
  function takesPoint3D(point: Point3D) { }
  // takesPoint3D(point2d) // compiler error
})();