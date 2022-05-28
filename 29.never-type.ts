(() => {
  // TypeScript does code flow analysis and there are cases when it infers that something can never occur 
  const something = (message: string) => { // something is of type never
    throw new Error(message)
  };

  // only something of type never can be assigned to a variable of type never
  // let myNever: never = 1 // compiler error
})();

(() => {
  type Point2D = {
    space: 'two-dimensional',
    x: number,
    y: number
  };

  type Point3D = {
    space: 'three-dimensional',
    x: number,
    y: number,
    z: number
  };

  type Point = Point2D | Point3D;

  function drawPoint(point: Point) {
    if (point.space === 'two-dimensional') {
      return `${point.x}, ${point.y}`;
    } else if (point.space === 'three-dimensional') {
      return `${point.x}, ${point.y}, ${point.z}`;
    } else {
      const ensureAllCasesAreHandled: never = point; // enforces handling all "space" cases; at this stage, point is truly of type never, because we previosly handled all the cases
      return ensureAllCasesAreHandled; // this way the compiler knows this function cannot return undefined | string, but only string
    }
  }

  const point = drawPoint({ // the compiler correctly infers that the return type is a string
    space: 'two-dimensional',
    x: 0,
    y: 0
  });
})();