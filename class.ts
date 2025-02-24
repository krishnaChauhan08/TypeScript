class Person6 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const persons = new Person6("john", 42);
// console.log(persons);

//--------   Access Modifiers   ------------
class Human {
  private first: string;
  public last: string;
  protected age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getName(): string {
    return `Name:${this.first} ${this.last} Age:${this.age}`;
  }
}

// let p1 = new Human("John", "Doe", 25);
// console.log(p1.getName());

class person7 extends Human {
  constructor(first: string, last: string, age: number) {
    super(first, last, age);
  }
}

const huxn = new person7("Huxn", "Webdev", 20);
