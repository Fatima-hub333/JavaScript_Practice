// Objects Literal

const people = [
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    pets: ['Lion', 'Cat'],
    address: {
      street: '123 Street',
      city: 'NewYork',
      state: 'Texas',
    },
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    pets: ['Lion', 'Cat'],
    address: {
      street: '123 Street',
      city: 'NewYork',
      state: 'Texas',
    },
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    pets: ['Lion', 'Cat'],
    address: {
      street: '123 Street',
      city: 'NewYork',
      state: 'Texas',
    },
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    pets: ['Lion', 'Cat'],
    address: {
      street: '123 Street',
      city: 'NewYork',
      state: 'Texas',
    },
  },
];

const peopleJSON = JSON.stringify(people);

console.log(JSON.parse(peopleJSON));