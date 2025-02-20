// when I don't want to return any value
// we use void as a annotations

function printMessage(message: string): void {
  console.log(`This is my message : ${message}`);

  // ERRor ⤵️
  // return message;
}

printMessage("Hello How Are You?");
