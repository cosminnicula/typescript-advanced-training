(() => {
  function square(this: { value: number }) { // "this" must be the first parameter within the function declaration; it's not part of the generated JavaScript and is used only for compile-time checking 
    this.value = this.value * this.value;
  }

  const validObject = {
    value: 5,
    square
  };

  console.log(validObject.square());

  const invalidObject = {
    v: 3,
    square
  };

  // console.log(invalidObject.square()); // compiler error: invalidObject does not have the required property "value"
})();