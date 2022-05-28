(() => {
  abstract class MyAbstractClass { // heads up! abstract classes cannot be instantiated
    abstract abstractMethod(): string;

    run() {
      console.log('Running: ', this.abstractMethod());
    }
  }

  class MyClass1 extends MyAbstractClass {
    abstractMethod(): string {
      return 'something1';
    }
  }

  class MyClass2 extends MyAbstractClass {
    abstractMethod(): string {
      return 'something2';
    }
  }

  const myClass1 = new MyClass1();
  myClass1.run();

  const myClass2 = new MyClass2();
  myClass2.run();
})();