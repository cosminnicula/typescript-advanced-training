(() => {
  // heads up! classes can implement both types and interfaces
  type Animal = {
    name: string,
    log(): void
  };

  class Cat implements Animal {
    constructor(public name: string) { }

    log() { console.log(this.name); }
  }

  const cat = new Cat('cat');
  cat.log();
})();