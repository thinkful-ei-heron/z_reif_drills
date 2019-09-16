'use strict';

function getYearOfBirth(age) {
  return 2019 - age;
}

function createGreeting(name, age) {
  if (name === undefined || age === undefined) {
    throw new Error('Something is undefined');
  }

  if (age < 0) {
    throw new Error('Age can not be negative.');
  }

  if (typeof age !== 'number') {
    throw new Error('Age is not a number.');
  }
  const yob = getYearOfBirth(age);
  return `Hi my name is ${name} and I'm ${age} years old and I was born in ${yob}.`;
}

try {
  const greeting1 = createGreeting('Rich', 18);
  console.log(greeting1);
} catch(e) {
  console.error(e.message);
}
