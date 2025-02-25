// Regular function
// function printNumber(item: number, defaultValue: number): [number, number] {
//   return [item, defaultValue];
// }
// function printString(item: string, defaultValue: string): [string, string] {
//   return [item, defaultValue];
// }
// function printBoolean(item: boolean, defaultValue: boolean): [boolean, boolean] {
//   return [item, defaultValue];
// }
// const num = printNumber(5, 20);
// const str1 = printString("string", "print");
// const bool = printBoolean(true, false);
// console.log(num);
// console.log(str1);
// console.log(bool);

//----------------------------------------------------------------------
// Generic Function
function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}

const num = uniqueDataTypesFunc<number>(10, 20);
const str1 = uniqueDataTypesFunc<string>("hello", "world");
const bool = uniqueDataTypesFunc<boolean>(true, false);
console.log(num);
console.log(str1);
console.log(bool);
