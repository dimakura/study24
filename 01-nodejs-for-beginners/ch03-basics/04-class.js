class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Collegue extends Human {
  constructor(name, age, stack) {
    super(name, age);
    this.stack = stack;
  }

  code() {
    console.log(`I'm coding in ${this.stack.join(", ")}`);
  }
}

const jane = new Human("Jane", 22);
jane.sayHello();

const john = new Collegue("John", 25, ["JavaScript", "React", "Node.js"]);
john.sayHello();
john.code();
