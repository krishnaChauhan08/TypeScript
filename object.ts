const person1: { firstName: string; lastName: string; age: number } = {
  firstName: "krishna",
  lastName: "chauhan",
  age: 20,
};
console.log(person1);

// using objects as function return value called factory function in javascripts
function printUser(): { name: string; age: number; location: string } {
  return {
    name: "krishna chauhan",
    age: 20,
    location: "India",
  };
}
const print1 = printUser();
console.log(print1);
