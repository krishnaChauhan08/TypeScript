type Person2 = {
  name: string;
  age: number;
  email?: string;
  readonly location ?: string;
};

const asta: Person2 = { name: "Asta", age: 25, email: "Asta295@gmail.com" };
const boby: Person2 = { name: "Boby", age: 30 , location:"india"};

// can not change the value of location because it is readonly 
// boby.location = "china";

console.log(asta);
console.log(boby);

