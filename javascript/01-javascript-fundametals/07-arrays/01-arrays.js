/*
ARRAYS IN JAVASCRIPT
*/


// 1. CREATE ARRAY

let marks = [10, 23, 44, 20, 56];

/*
Another way (not commonly used):
let arr = new Array(1, 2, 3);
*/


// 2. ACCESS ELEMENTS

console.log(marks[3]);   // 20
console.log(marks[50]);  // undefined

/*
If index does not exist, result is undefined
*/


// 3. MODIFY ELEMENTS

let arr = [1, 2, 3, 4];

arr[2] = 15;

console.log(arr); // [1, 2, 15, 4]



/*
4. ADD ELEMENTS
*/

arr.push(5);      // add at end
arr.unshift(0);   // add at beginning

console.log(arr);



/*
5. REMOVE ELEMENTS
*/

arr.pop();        // remove last
arr.shift();      // remove first

console.log(arr);



/*
6. LENGTH PROPERTY
*/

console.log(arr.length);



/*
7. ARRAY CAN STORE MIXED TYPES
*/

let mixed = [1, "hello", true, null];

console.log(mixed);



/*
8. ARRAY IS A REFERENCE TYPE
*/

let a = [1, 2, 3];
let b = a;

b.push(4);

console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]



/*
9. CHECK IF ARRAY
*/

console.log(Array.isArray(a)); // true



/*
IMPORTANT

- Arrays are objects in JavaScript
- Indexed starting from 0
- Dynamic in size
*/