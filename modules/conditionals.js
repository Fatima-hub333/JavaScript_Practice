// Conditionals

let age = 30;

if (age > 30) {
  console.log('Greate than 30');
} else if (age > 25) {
  console.log('Greater than 25');
} else {
  console.log('Less than 25');
}

let a =1;
let b = 2;

function evaluate() {
  return a < b }

console.log(evaluate());

let animal = 'cat';
const likesCat = animal === 'cat' ? true : false;

console.log(likesCat);

let animal = 'dog';
switch(animal) {
  case 'dog':
  case 'cat':
    console.log('cat or dog');
    break
    default:
      console.log('Neither');
      break
}