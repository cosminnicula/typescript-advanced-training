type Point = {
  x: number,
  y: number,
}

(() => {
  // there are cases when the compiler (TypeScript's code flow analysis) does not know if a variable is null or undefined
  // the exclamation mark (!) is a non null assertion and is telling the compiler that a variable is definetly initialized
  let point: Point | undefined;

  function initPoint() {
    point = {
      x: 0,
      y: 0
    };
  }

  initPoint();

  // console.log(point.z.trim()); // compiler error because the compiler doesn't know if "z" is initialized or not
  console.log(point!.x.toString()); // here we're telling the compiler that "point" and "z" are not undefined
})();

(() => {
  // a better approach is to refactor the code 
  function initPoint(): Point {
    return {
      x: 0,
      y: 0
    };
  }

  const point = initPoint();

  console.log(point.x.toString()); // non null assertion no longer needed
})();