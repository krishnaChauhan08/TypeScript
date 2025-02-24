type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
};

const res5 = printUserInfo({ name: "Alex", age: 20, location: "india" });
console.log(res5);
