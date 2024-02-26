// Maths object

let a = Math.random();
console.log(a);

// String
let name = new String('Shorya Tyagi');

console.log(name);
let words = name.split(' ');
console.log(words);

let wish =`Hello
my name is ${name}`;
console.log(wish);


let date = new Date();
console.log(date);


let courses = [
    {no:1, name:'Shorya'},
    {no:2, name:'Tyagi'}
];

console.log(courses);

let finder = courses.find(course=> course.name == 'Shorya');
                                  // predicate function
        

console.log(finder);

let first=[1,2,3];
first.forEach(i=> console.log(i));

let numbers = [5,6,7,8];
const joined = numbers.join(',');
console.log(joined);