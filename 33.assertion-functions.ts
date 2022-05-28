(() => {
  // this is an assertion function
  // the syntax is similar to the syntax of user defined type guards
  function assert(condition: unknown, message: string): asserts condition { // tells the compiler that this function only returns if the condition parameter is true; if you remove the return type, then line 23 will have a compiler error
    if (!condition) throw new Error(message);
  }

  type Point = { x: number, y: number, creationDate?: Date }

  function getPoint(): Point | null {
    return {
      x: 0,
      y: 0,
      creationDate: new Date()
    };
  }

  (() => {
    const maybePoint = getPoint(); // maybePoint is of type 'Point | null'; see line 23, where maybePoint becomes of type 'Point'

    assert(maybePoint != null, 'point not available') // the compiler understands the impact of this assertion

    console.log('x', maybePoint.x) // after the previous assertion, maybePoint can only be of type 'Point', and not of type 'Point | null'
  })();

  (() => {
    function assertDate(value: unknown, message: string): asserts value is Date {
      if (!(value instanceof Date)) throw new Error(message);
    }

    const maybePoint = getPoint();

    // narrows maybePoint to be of type 'Point'
    assert(maybePoint != null, 'point not available')

    // narrows maybePoint.creationDate to be of type 'Date'
    assertDate(maybePoint.creationDate, 'creation date not available')

    console.log("creation date", maybePoint.creationDate.toISOString()); // here, maybePoint is definetly of type 'Point' and maybePoint.creationDate is of type 'Date'
  })();
})();

// user defined type guards vs assertion functions
// in application code use user defined type guards, to avoid throwing errors
// in tests use assertion functions
