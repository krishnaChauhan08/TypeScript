// never keyword is used to indicates that a function wiil not return anything or
// that a variable can never have a value

// a function that always throws an error
function throwError(msg: string): never {
  throw new Error(msg);
}

// a function that has an infinite loop
function infinteLoop(): never {
  while (true) {}
}

// a variable that can never have a value
let x: never;

function neverReturns(): never {
  while (true) {}
}

x = neverReturns();
