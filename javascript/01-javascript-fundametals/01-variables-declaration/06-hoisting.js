/*
HOISTING IN JAVASCRIPT

Hoisting means:
JavaScript moves declarations to the top of their scope
before code execution.

Important:
Only declarations are hoisted, not initializations.
*/


// 1. var HOISTING

console.log(a);   // undefined

var a = 12;

/*
Internally behaves like:

var a;        // declaration is hoisted
a = 12;       // initialization stays in place

Also:
var variables are initialized with undefined during hoisting
*/


// 2. let and const HOISTING

// console.log(b);   // ReferenceError

let b = 10;

/*
- let and const are also hoisted
- But they are NOT initialized
- Accessing them before initialization leads to TDZ error
*/


/*
SUMMARY

var   : hoisted + initialized as undefined
let   : hoisted but not initialized (TDZ)
const : hoisted but not initialized (TDZ)
*/




// 3. COMMON CONFUSION 1
// Why var is accessible outside block but let is not

if (true) {
    var x = 1;
    let y = 2;
}

console.log(x);   // 1
// console.log(y); // error

/*
Reason:
- var is function scoped (ignores block scope)
- let is block scoped (respects {})
*/




// 4. COMMON CONFUSION 2
// const and object mutation

const person = { name: 'vishesh' };

person.name = 'vbp';   // allowed (mutation)
  
// person = {};        // error (reassignment)

/*
const means:
- You cannot change the reference
- You can still modify internal properties

To prevent changes:
Use Object.freeze()
*/




// 5. EXTRA: typeof behavior (important edge case)

console.log(typeof p);   // "undefined"

var p = 5;

// console.log(typeof q); // ReferenceError

let q = 5;

/*
- typeof with var before initialization returns "undefined"
- typeof with let/const in TDZ throws error
*/