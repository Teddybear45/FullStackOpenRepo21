// classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const adam = new Person("Adam", 30);
adam.greet();

const jane = new Person("Jane", 25);
jane.greet();

//these types are still Objects



