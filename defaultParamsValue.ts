// function mai parameter ke age uska type likh do
// aur uski value assign kardo
// vo uska default type aur value hoga

function greet(personName: string = "Krishna") {
  return `Hello ${personName}`;
}

const res1 = greet();
console.log(res1);

const res2 = greet("sanu");
console.log(res2);
