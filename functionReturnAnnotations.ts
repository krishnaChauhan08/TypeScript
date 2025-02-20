// agar app return mai bhi annotations/types ko define
// krna chate ho to apko sirf
// parameter area ke bhar bas annotaion karna hoga

// Regular function
function double1(x: number): number {
  return x * x;
}
const res3 = double1(2);
console.log(res3);

// Using Arrow function
const double2 = (x: number): number => x * x;
const res4 = double2(4);
console.log(res4);
