const Person = {
        name: 'John',
        age: 21,
        gender: 'male',
        address: {
            country: 'Kenya',
            city: 'Eldoret',
        }
    },
    { name, age, gender, address: { country, city } } = Person;
console.log(Person.name); // accessing object properties via dot notation
console.log(name); // accessing object properties via destructuring
console.log(age);
console.log(country);
console.log(city);