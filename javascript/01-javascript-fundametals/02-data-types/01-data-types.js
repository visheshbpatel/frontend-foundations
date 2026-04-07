/*
DATA TYPES IN JAVASCRIPT

Two categories:
1. Primitive (value types)
2. Reference (non-primitive types)
*/


// 1. PRIMITIVE TYPES

/*
Primitive values are copied by value.
Each variable gets its own independent copy.
*/

let x = 12;
let y = x;     // correct copy

x = x + 2;

console.log(x); // 14
console.log(y); // 12 (not affected)


// Types of primitive values

// String
let s1 = 'vishesh';
let s2 = "vishesh";
let s3 = `vishesh`;


// Number
let n1 = 12;
let n2 = 12.4;


// Boolean
let isTrue = true;
let isFalse = false;


// null
/*
Intentional absence of value
*/
let selected = null;
selected = 'vbp';


// undefined
/*
Value not assigned yet (default state)
*/
let u;
console.log(u); // undefined


// Symbol
/*
Creates unique identifiers
*/
let u1 = Symbol("uid");
let u2 = Symbol("uid");

console.log(u1 === u2); // false

let obj = {
    uid: 12,
    name: 'vbp'
};

let uniqueKey = Symbol('id');
obj[uniqueKey] = '001';


// BigInt
/*
For very large integers
*/
let big = 9007199254740991n;



// 2. REFERENCE TYPES

/*
Reference types are copied by reference.
Variables point to the same memory location.
*/

// Array
let arr = [1, 2, 3];
let copyArr = arr;

copyArr.pop();

console.log(arr);     // [1, 2]
console.log(copyArr); // [1, 2]


// Object
let person = {
    name: 'vbp'
};

let ref = person;

ref.name = 'madhav';

console.log(person.name); // madhav
console.log(ref.name);    // madhav


// Function (also a reference type)
function greet() {
    console.log("hello");
}

let fn = greet;
fn();



/*
Primitive:
- copied by value
- independent

Reference:
- copied by reference
- shared changes
*/