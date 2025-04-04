function classDecorator<T extends { new (...arg: any[]): {} }>(construtor: T) {
  return class extends construtor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class SuperClass {
  public myProperty: string = "Abc123";

  print() {
    console.log(this.myProperty);
  }
}
console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);
