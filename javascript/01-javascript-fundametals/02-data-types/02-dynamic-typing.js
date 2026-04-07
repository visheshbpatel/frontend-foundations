/*
DYNAMIC TYPING IN JAVASCRIPT

JavaScript is dynamically typed.
This means variables do not have fixed types.
The type depends on the value assigned at runtime.
*/


let a = 12;        // number
a = 'vbp';         // string
a = true;          // boolean
a = [];            // object (array)
a = null;          // object (special case)
a = undefined;     // undefined

/*
Same variable holding different types.
This is dynamic typing.
*/


/*
STATIC vs DYNAMIC TYPING

Static typing:
- Variable type is fixed
- Checked at compile time
- Example: C, C++, Java

Dynamic typing:
- Type is decided at runtime
- Can change anytime
- Example: JavaScript, Python
*/


/*
NOTE

It is not that "dynamic typing is better or worse".
Both have trade-offs.

Dynamic typing:
- Faster to write
- More flexible
- Easier for beginners

Static typing:
- Safer
- Catches errors early
- Better for large systems
*/


/*
TYPEOF OPERATOR (important)

Used to check type of a value
*/

console.log(typeof 12);        // number
console.log(typeof 'vbp');     // string
console.log(typeof true);      // boolean
console.log(typeof []);        // object
console.log(typeof null);      // object (known bug in JS)
console.log(typeof undefined); // undefined


/*
COMMON QUIRKS IN JAVASCRIPT

1. typeof null returns "object"
   This is a historical bug

2. Arrays are also "object"
   Use Array.isArray() to check arrays

Example:
*/

console.log(Array.isArray([])); // true