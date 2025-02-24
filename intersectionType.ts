type Person3 = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  title: string;
};

type PersonAndEmployee = Person3 & Employee;

const Luffy: PersonAndEmployee = {
  name: "Luffy",
  age: 18,
  id: 456,
  title: "Pirate King",
};

console.log(Luffy);
console.log(
  `Name : ${Luffy.name} Age : ${Luffy.age} Id : ${Luffy.id} Title : ${Luffy.title} `
);
