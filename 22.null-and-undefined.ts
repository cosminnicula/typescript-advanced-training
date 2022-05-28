(() => {
  // heads up! null and undefined are ennforced as distinct types when compilerOptions.strict is true

  function canReturnBooleanOrNullOrUndefined(): boolean | null | undefined {
    var random = Math.floor(Math.random() * 3);

    if (random === 0) {
      return true;
    } else if (random === 1) {
      return null;
    }

    return undefined;
  }

  const result = canReturnBooleanOrNullOrUndefined();

  if (result == null) {
    console.log('result is null or undefined', result);
  }

  if (result != null) {
    console.log('result is boolean', result);
  }
})();

(() => {
  function safeTrim(s: string | null | undefined) {
    if (s == null) { // check for null or undefined
      return s;
    }

    return s.trim();
  }

  console.log(safeTrim("something"));
  console.log(safeTrim(null));
  console.log(safeTrim(undefined));
})();