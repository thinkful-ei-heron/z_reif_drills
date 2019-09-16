// console.log('Hello my name is Zee and I\'m 42.');

function createGreeting (name,age) {
    // const yearOfBirth = 2019 - age;
    return (`Hello my name is ${name} and I'm ${age}. `);
}

function getYearOfBirth (age) {
    const yearOfBirth = 2019 - age;
    if (yearOfBirth < 0){
        throw new Error("Age can not be negative.");
    } else {
        
        return (`I was born in ${yearOfBirth}.`); 
    }
}


try {
    const greeting1 = createGreeting('Zee', 42);
    console.log(greeting1);
} catch (e) {
    console.log(e.message);
}
// const greeting1 = createGreeting('Zee', 42);
// console.log(greeting1);
// console.log(getYearOfBirth(40));