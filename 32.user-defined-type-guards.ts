(() => {
  // the user defined type guards behave in the same way as JavaScript's built-in type guards (e.g. 'in' operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
  type Point2D = { x: number, y: number };

  type Point3D = { x: number, y: number, z: number };

  type Point = Point2D | Point3D;

  function is2DPoint(point: Point): point is Point2D { // a user defined type guard is a function that returns a boolean and its return syntax is of the following form: variable is type 
    return 'x' in point && 'y' in point;
  }

  function is3DPoint(point: Point): point is Point3D { // if the function returns true, the point is of type Point3D
    return is2DPoint(point) && 'z' in point;
  }

  function getFormattedPoint(point: Point) {
    if (is3DPoint(point)) {
      return `${point.x}, ${point.y}, ${point.z}`; // here, point is inferred as being of type Point2D
    } else if (is2DPoint(point)) {
      return `${point.x}, ${point.y}`; // here, point is inferred as being of type Point3D
    }

    const ensureAllCasesAreHandled: never = point;
    return ensureAllCasesAreHandled;
  }

  const point2D = getFormattedPoint({ x: 0, y: 0 });
  const point3D = getFormattedPoint({ x: 0, y: 0, z: 0 });
})();