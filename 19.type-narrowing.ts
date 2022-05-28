(() => {
  // narrow down unions for primitive types
  function formatInput(input: string | string[]) { // union type
    if (typeof input === 'string') {
      ; // typeof allows narrowing down a union type; typeof only works with primitives
      return input;
    } else if (Array.isArray('array')) {
      return input.map((s) => s.trim()).join(' ');
    }

    throw new Error(`Expected string or array of strings. Got ${input}`);
  }

  const myString = formatInput('something');
  const myArrayOfString = formatInput(['1', '2']); // the compiler incorrectly infers the type to 'string', instead of string[]
})();

(() => {
  // typeof does not work for classes
  class Tesla {
    getRange() {
      return 1000;
    }

    getBatteryType() {
      return "li-ion";
    }
  }

  class Volkswagen {
    getRange() {
      return 800;
    }
  }

  // for classes, use instanceof
  console.log(typeof new Tesla()); // type is 'object'
  console.log(typeof new Volkswagen()); // type is 'object'

  console.log(new Tesla() instanceof Tesla); // true
  console.log(new Volkswagen() instanceof Volkswagen); // true

  type Car = Tesla | Volkswagen;

  const car: Car = new Tesla()
  console.log(new Tesla() instanceof Tesla); // true
})();

(() => {
  // for object literals, neither typeof, nor instanceof will help since the the object was not created with "new"
  // use the following workaround: "in"
  type Point2D = { x: number, y: number };

  type Point3D = { x: number, y: number, z: number };

  type Point = Point2D | Point3D;
  function logPoint(point: Point) {
    if ('z' in point) {
      // heads up! you cannot get point's concrete type at runtime, because there's no runtime equivalent for 'type' keyword
      console.log(`${point.x}, ${point.y}, ${point.z}`);
    } else {
      console.log(`${point.x}, ${point.y}`);
    }
  }

  logPoint({ x: 0, y: 0, z: 0 });
  logPoint({ x: 0, y: 0 });
})();