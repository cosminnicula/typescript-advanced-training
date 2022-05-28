(() => {
  // 1st example
  type Point = { x: number, y: number }

  const point: Point = { x: 0, y: 0 };

  // point = { x: 0, y: 0}; // compiler error: cannot reassigning point to a new instance


  // 2nd example 
  point.x = 1; // in TypeScript, just like in JavaScript, it's ok to reassign properties of a const instance
})();