// the syntax is similar with type alias
// interfaces, just like types, are only available at compile-time, and have no JavaScript runtime correspondent 
interface Point2D {
  x: number,
  y: number
}

interface Point3D extends Point2D {
  z: number
}

(() => {
  const point3d: Point3D = {
    x: 0,
    y: 0,
    z: 0
  };

  console.log(`x: ${point3d.x}, y: ${point3d.y}, z: ${point3d.z}`);
})();

(() => {
  class MyPoint2D implements Point2D {
    constructor(public x: number, public y: number) { }
  }

  const point2d = new MyPoint2D(0, 0);
  console.log(`x: ${point2d.x}, y: ${point2d.y}`);
})();