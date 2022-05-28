(() => {
  // 1st example: annotation syntax is similar with JavaScript's literal object initializer

  const point: { x: number, y: number } = {
    x: 1,
    y: 1
  }

  // 2nd example: type keyword
  type Point = { x: number, y: number }

  let center: Point = { // Point is a type alias
    x: 0,
    y: 0
  }
})();