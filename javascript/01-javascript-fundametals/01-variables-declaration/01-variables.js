/*
VAR, LET, CONST (Clean Comparison)

Note:
Do not use the same variable name repeatedly in the same scope.
It causes errors with let and const and creates confusion.
*/


// 1. Declaring without keyword (not recommended)

x = 12;
// This creates a global variable implicitly.
// Avoid this in real projects.



// 2. var

var a;        // declaration
var a = 12;   // re-declaration + initialization allowed

/*
Properties of var:
- Function scoped
- Can be re-declared
- Can be updated
- Hoisted and initialized as undefined
*/

var a = 10;
var a = 20;   // allowed
a = 30;       // allowed




// 3. let

let b;        // declaration
b = 12;       // initialization

/*
Properties of let:
- Block scoped
- Cannot be re-declared in the same scope
- Can be updated
- Hoisted but not initialized (Temporal Dead Zone)
*/

// let b;     // error (already declared)
b = 20;       // allowed




// 4. const

const c = 12;   // must be declared and initialized together

/*
Properties of const:
- Block scoped
- Cannot be re-declared
- Cannot be updated
- Must be initialized at declaration
*/

// const c;   // error
// c = 20;    // error




// 5. Key differences

/*
var   : function scoped, re-declaration allowed
let   : block scoped, no re-declaration, can update
const : block scoped, no re-declaration, no update
*/




// 6. Best practice

/*
- Use const by default
- Use let when value needs to change
- Avoid var in modern JavaScript
*/