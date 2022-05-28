(() => {
  // string literals
  let myLiteralType: 'SOMETHING' | 'SOMETHING_ELSE'; // union of string literals

  // myLiteralType only accepts being initialized with 'SOMETHING' or 'SOMETHING_ELSE'
  myLiteralType = 'SOMETHING';
  myLiteralType = 'SOMETHING_ELSE';
  // myLiteralType = 'NOT_ALLOWED'; // compiler error
})();

(() => {
  // number literals
  type MyNumberLiteralType = 1 | 2 | 3;

  function getNewNumber(n: MyNumberLiteralType, incrementWith: number) {
    const newN = (n + incrementWith - 1) as MyNumberLiteralType;
    return newN;
  }

  let n1 = getNewNumber(1, 1);

  // n1 = 4; // compiler error, since 4 is not a member of the MyNumberLiteralType
})();

(() => {
  // extract string literals into a named type alias
  type MyStringLiteralType = 'SOMETHING' | 'SOMETHING_ELSE';

  function log(s: MyStringLiteralType) {
    console.log(s);
  }

  log('SOMETHING');
  // log('NOT_ALLOWED'); // compiler error
})();