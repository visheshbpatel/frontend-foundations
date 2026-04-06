/*
REASSIGNMENT vs REDECLARATION vs INITIALIZATION
*/


// 1. var

var a = 12;      // declaration + initialization
a = 32;          // reassignment (changing value)

var a = 543;     // redeclaration allowed



// 2. let

let b = 12;      // declaration + initialization
b = 14;          // reassignment allowed

// let b = 15;   // error: redeclaration not allowed



// 3. const

const c = 10;    // declaration + initialization (must be together)

// c = 20;       // error: reassignment not allowed
// const c = 30; // error: redeclaration not allowed




let x;      // declaration
x = 10;     // initialization (first time)
x = 20;     // reassignment
// initialization happens only once
// reassignment can happen multiple times



/*
Declaration:
Creating a variable
Example: let x;

Initialization:
Assigning value for the first time
Example: x = 10;

Declaration + Initialization:
let x = 10;

Reassignment:
Changing value of an existing variable
Example: x = 20;

Redeclaration:
Declaring the same variable again
Example: let x = 30;   // not allowed with let/const
*/


//SUMMARY
/*
var   : can reassign, can redeclare
let   : can reassign, cannot redeclare
const : cannot reassign, cannot redeclare
*/