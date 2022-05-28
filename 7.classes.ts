(() => {
  class Animal {
    protected name: string; // protected makes the member accessible within the class hierarchy; by default members are public

    constructor(name: string) {
      this.name = name;
    }

    sleep(time: number): void {
      console.log(`${this.name} slept ${time} hours`);
    }
  }

  let cat = new Animal('Cat');
  cat.sleep(10);

  class Herbivore extends Animal {
    eat(plantName: string) {
      console.log(`${this.name} eat ${plantName}`);
    }
  }

  let bird = new Herbivore('Giraffe');
  bird.sleep(2);
  bird.eat('leafs');

})();