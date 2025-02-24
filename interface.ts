// Interface dehinition for a object
interface Person4 {
  firstName: string;
  lastName: string;
  age: number;
}
// Usage
const examplePerson: Person4 = {
  firstName: "john",
  lastName: "Doe",
  age: 20,
};
console.log(examplePerson.firstName);
console.log(examplePerson.lastName);
console.log(examplePerson.age);

// while interfaces are commonly used to define the structure of objects,they
// are not limited to just obects.Interfaces in typescripts can also be used to
// describe the shape of functions and classes.

//-----------------------------------------------------------------------
// Interfaces for a  functions
interface MathOperation {
  (x: number, y: number): number;
}
// Usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3));
console.log(subtract(7, 2));

//-------------------------------------------------------------------------------
// Interface for a class
interface Vehicle {
  start(): void;
  stop(): void;
}
// Class implementing the interface
class Car implements Vehicle {
  start() {
    console.log("Car started");
  }
  stop() {
    console.log("Car stopped");
  }
}
// Usage
const myCar = new Car();
myCar.start();
myCar.stop();

// Declaration merging
// declaration merging in typescripts refer  to the ability to extends or augment
// an existing declaration, including interfaces. This can be useful when you
// want to add new properties or method to existing interfaces without modifying
// the original declatiom

// Original interfaces
interface motorVehicle {
  start(): void;
  stop(): void;
}
// Declaration merging(interface extension)
interface motorVehicleVehicle {
  down(): void;
}
// Class implementing the interface
class Car1 implements motorVehicle {
  start() {
    console.log("Motor cycle started");
  }
  stop() {
    console.log("Motor cycle stopped");
  }
  down() {
    console.log("Motor cycle is down");
  }
}
// Usage
const myCar1 = new Car1();
myCar1.start();
myCar1.stop();
myCar1.down();
