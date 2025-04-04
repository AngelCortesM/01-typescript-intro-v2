export function whatsMyType<T>(argument: T): T {
  return argument;
}

let amIString = whatsMyType<string>("Hello My Pana");
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3]);
let amIObject = whatsMyType<{ name: string }>({ name: "Tony" });
console.log(amIString.split(" "));
console.log(amINumber.toFixed(2));
console.log(amIArray.join("-"));
console.log(amIObject.name);
