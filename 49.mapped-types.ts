(() => {
  type Location = {
    lat: number,
    long: number
  }

  const bucharestLocation1: Location = {
    lat: 44.439663,
    long: 26.096306
  }

  // now, we want this location to be a readonly Location type

  type ReadonlyLocation2 = {
    readonly lat: number, // hardcoded readonly
    readonly long: number
  }

  const bucharestLocation2: ReadonlyLocation2 = {
    lat: 44.439663,
    long: 26.096306
  }

  // bucharestLocation2.lat = 0; // compiler error

  // we can get rid of the 'lat: number' and 'long: number' duplication by using mapped types: [Item in Union]: Output

  type ReadonlyLocation3 = {
    readonly [Item in 'lat' | 'long']: number // hardcoded union of strings
  }

  const bucharestLocation3: ReadonlyLocation3 = {
    lat: 44.439663,
    long: 26.096306
  }

  // bucharestLocation3.lat = 0; // compiler error

  // we can further improve this syntax

  type ReadonlyLocation4 = {
    readonly [Item in keyof Location]: Location[Item] // keyof
  }

  const bucharestLocation4: ReadonlyLocation4 = {
    lat: 44.439663,
    long: 26.096306
  }

  // bucharestLocation4.lat = 0; // compiler error

  // or even better

  type ReadonlyLocation5<T> = {
    readonly [Item in keyof T]: T[Item] // keyof with generic argument of type T
  }

  const bucharestLocation5: ReadonlyLocation5<Location> = {
    lat: 44.439663,
    long: 26.096306
  }

  // bucharestLocation5.lat = 0; // compiler error
  
  // or the simplest form

  const bucharestLocation6: Readonly<Location> = {
    lat: 44.439663,
    long: 26.096306
  }

  // bucharestLocation6.lat = 0; // compiler error
})();