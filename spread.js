const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Addnumbers = [...numbers, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(Addnumbers);


let Person = {
    name: 'jane',
    age: 28,
    location: 'Kutus',
}
let student = {
    ...Person,
    course: 'BIT',
    University: 'KyUK',
    Grade: 'A',
}
console.log(student);