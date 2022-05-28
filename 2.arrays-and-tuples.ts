(() => {
  let array: number[] = [1, 2, 3]

  // Arrays
  array = [1]
  // array = ['string'] // compiler error
})();

(() => {
  // Tuples are arrays of fixed length
  let tuple: [number, number] = [0, 0]
  tuple = [1, 2]
  // tuple = [2] // compiler error
  // tuple = ['something', 1] // compiler error
})();