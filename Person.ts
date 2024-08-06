interface Person {
  name: string;
  age: number;
  greet(): void;
}

const person: Person = {
  name: 'Max',
  age: 30,
  greet() {
    console.log('Hello, my name is ' + this.name);
  }
};

console.log(person.greet());