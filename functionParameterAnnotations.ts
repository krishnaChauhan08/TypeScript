// It is used to specify the expected types
// of  the parameters that a function takes

// means--> parameter ke age uska type likh do

// also notice, typescript will gives you warning if you
// provide more or less arguments then you specify
// in your parameters area

// Regular function Annotations
function addOne(num: number) {
  return num + 1;
}
const result = addOne(3);
console.log(result);

// Array function Annotations
const double = (x: number, y: number) => x * y;
const res = double(2, 10);
console.log(res);

// give error because double 3 argument de rha 
//                   lekin parametr 2 le rha hai
// const multiRes = double(2, 10,20);
