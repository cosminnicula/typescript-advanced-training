(() => {
  let myVar: number;

  function initVar() {
    myVar = 0;
  }
  // console.log(myVar); // compiler error: Variable 'myVar' is used before being assigned
})();

(() => {
  // class Point {
  //   x: number; // compiler error: value does not have an initializer and are not initialized in the contructor
  //   y: number; // compiler error

  //   constructor() {
  //     this.init();
  //   }

  //   init() {
  //     this.x = 0;
  //     this.y = 0;
  //   }
  // }
})();

(() => {
  let myVar!: number; // definite assignment assertion

  function initVar() {
    myVar = 0;
  }
  console.log(myVar);
})();

(() => {
  // definite assignment assertion can also be used on members of a class
  class Point {
    x!: number;
    y!: number;

    constructor() {
      this.init();
    }

    init() {
      this.x = 0;
      this.y = 0;
    }
  }

})();
