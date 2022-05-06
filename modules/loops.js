// Loops

let i = 0;

while (i < 10) {
  console.log(i);
  i += 1;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const people = [
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
  },
  {
    firstName: 'Fatima',
    lastName: 'Zahir',
    age: 25,
  },
];

people.forEach((person) => console.log(person.age));

const personName = people.map((person) => person.firstName);
console.log(personName);

const personAgeUnder30 = people.filter((person) => person.age < 30);

console.log(personAgeUnder30);