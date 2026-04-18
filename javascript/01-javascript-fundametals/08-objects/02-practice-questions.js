/*
OBJECT PRACTICE
*/


// Q1. Create object

let obj = {
    name: 'vishesh',
    age: 22,
    isEnrolled: true
};



// Q2. Object keys as number/boolean

let obj2 = {
    true: 'yes',
    1: 'one',
    2: 'two'
};

/*
Note:
- All object keys are converted to strings internally
- true → "true", 1 --> "1"
- 3.5 is actually allowed (it becomes "3.5")
*/



// Q3. Access 'first-name'

const user = {
    'first-name': 'vishesh'
};

console.log(user['first-name']);

// dot notation does not work here



// Q4. Dynamic key access

let key = 'age';

const user2 = {
    age: 22
};

console.log(user2[key]);



// Q5. Access nested value

const locations = {
    city: 'Bhopal',
    coordinates: {
        lat: 2.2,
        lng: 4.4
    },
};

console.log(locations.coordinates.lat);



// Q6. Optional chaining

console.log(locations?.coordinates?.lat);

/*
Prevents error if coordinates is missing
*/



// Q7. Destructuring

let { city } = locations;
let { lat } = locations.coordinates;



// Q8. Destructure 'first-name'

let { 'first-name': firstName } = user;

console.log(firstName);



// Q9. for-in loop

const course = {
    title: 'JavaScript',
    duration: '4 weeks'
};

for (let key in course) {
    console.log(key);
}



// Q10. Object.entries

Object.entries(course).forEach(function ([key, value]) {
    console.log(`${key}: ${value}`);
});



/*
Cleaner than val[0], val[1]
*/



// Q11. Shallow copy

const original = { a: 1, b: 2 };

const orgCopy = { ...original };



// Q12. Deep clone

const newObj = { info: { score: 90 } };

const objCopy = JSON.parse(JSON.stringify(newObj));

newObj.info.score = 99;

console.log(newObj.info.score); // 99
console.log(objCopy.info.score); // 90



// Q13. Optional chaining

const person = {};

console.log(person?.profile?.name);



// Q14. Computed property

const change = 'role';

let source = {
    name: 'vbp',
    [change]: 'admin'
};

console.log(source.role);



// Q15. Reference vs Deep Clone

/*
Reference (shallow copy):
let a = { x: 1 };
let b = a;

b.x = 2;
console.log(a.x); // 2 (same reference)


Deep clone:
let a = { x: { y: 1 } };
let b = JSON.parse(JSON.stringify(a));

b.x.y = 2;
console.log(a.x.y); // 1 (independent copy)
*/

