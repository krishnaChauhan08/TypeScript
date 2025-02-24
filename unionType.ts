// UNIONS
// for ex we what to define a variable that can be either a number or a string
let myVar: number | string;

// we can use unions with function paraters.for example, we have a function that accetps
// either a string or an array of strings, we could define its parameters like this:
function foo(param: string | string[]) {
  // function body
}
//-------------------------------------------------------------------
// Unions can also be combined with other types in typescripts, such as interfaces and classes.
// for examole, we could define an interface that as  propery that can be either a string or a number:
interface MyInterface {
  myProp: string | number;
}
// -----------------------------------------------------------
let password: string | number = 25;
//----------------------------------------------------------
type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

// In user obj we can use one of the types of UseInfo and AccountDetails
// we can use also both types in single obj
let user: UserInfo | AccountDetails = {
  first: "john",
  last: "doe",
  age: 25,

  email: "user@gmail.com",
  password: "something",
};

console.log(user);

