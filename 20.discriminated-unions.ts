(() => {
  // discriminated unions with strings
  // a single shared field (e.g. 'space') can be used to discriminate between the members of a union
  type Point2D = { space: 'two-dimensional', x: number, y: number }; // notice the syntax "space: 'two-dimensional'", as if 'two-dimensional' is a type

  type Point3D = { space: 'tri-dimensional', x: number, y: number, z: number };

  type Point = Point2D | Point3D;

  function logPoint(point: Point) {
    if (point.space === 'tri-dimensional') { // a discriminated union is useful if all of the types in the union have a property with the same name, but different literal values
      console.log(`${point.x}, ${point.y}, ${point.z}`);
    } else {
      console.log(`${point.x}, ${point.y}`);
    }
  }

  logPoint({ space: 'tri-dimensional', x: 0, y: 0, z: 0 });
  logPoint({ space: 'two-dimensional', x: 0, y: 0 });
})();

(() => {
  // discriminated unions with booleans
  type SuccessMessage = {
    isSuccess: true,
    message: string,
  }

  type FailureMessage = {
    isSuccess: false,
    message: string,
  }

  type Message = SuccessMessage | FailureMessage;

  function logMessage(message: Message) {
    if (message.isSuccess) {
      console.log(`Success: ${message.message}`);
    } else {
      console.log(`Failure: ${message.message}`);
    }
  }

  logMessage({ isSuccess: true, message: 'http request sent' });
  logMessage({ isSuccess: false, message: 'http request not sent' });
})();