// console.log('Hello my name is Zee and I\'m 42.');

function createGreeting (name,age) {
    // const yearOfBirth = 2019 - age;
    return (`Hello my name is ${name} and I'm ${age}. `);
}

function getYearOfBirth (age) {
    const yearOfBirth = 2019 - age;
    return (`I was born in ${yearOfBirth}.`);
}
const greeting1 = createGreeting('Zee', 42);
console.log(greeting1);