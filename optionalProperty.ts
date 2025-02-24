// we can make any property optional using ?
// so we can choose whether or not to include the email property in objet

type Person1 = {
  name: string;
  age: number;
  email?: string;
};

// in alice obj we chose to add email propery
// in bob obj we chose not to add email property
const alice: Person1 = { name: "Alice", age: 25, email: "Alice295@gmail.com" };
const bob: Person1 = { name: "Bob", age: 30 };

console.log(alice);
console.log(bob);
