/*
TEMPORAL DEAD ZONE (TDZ)

The time between variable declaration and initialization
where the variable cannot be accessed.
*/



// 1. TDZ with let

// console.log(a);  
// ReferenceError: Cannot access 'a' before initialization

let a = 33;

/*
- JavaScript knows that 'a' exists
- But it is not initialized yet
- Accessing it before initialization gives ReferenceError
*/



// 2. var does not behave like TDZ

console.log(b);   // undefined

var b = 123;

/*
- var is hoisted and initialized with undefined
- So no error is thrown
*/


/*
Memory is reserved for all variables during hoisting
var gets a default value undefined
let and const stay uninitialized
That uninitialized phase is the TDZ
 */



// One extra edge case (important for interviews)
let y = 10;

{
    // console.log(y);  // TDZ error (inner scope)
    let y = 20;
}

// Even though x exists outside, the inner let x creates a new scope and causes TDZ inside that block.





/*
KEY DIFFERENCE

let / const:
- Hoisted but NOT initialized
- Stay in Temporal Dead Zone until initialization

var:
- Hoisted and initialized with undefined
- No TDZ error
*/