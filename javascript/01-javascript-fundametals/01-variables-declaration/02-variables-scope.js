// 1. var

var a = 12;

/*
- Added to global object (window) only if declared in global scope
- Function scoped
- Can be re-declared without error
- Can be updated
*/

var a = 13;   // allowed





// 2. let

let b = 12;

/*
- Block scoped
- Cannot be re-declared in the same scope
- Can be updated
*/

b = 20;       // allowed
// let b = 13;   // error: Identifier 'b' has already been declared





// 3. const

const discount = 12;

/*
- Block scoped
- Cannot be re-declared
- Cannot be updated
- Must be initialized at declaration
*/

// discount = 22;  
// error: Assignment to constant variable




/*
var   :  ignores block boundaries
let   :  respects block boundaries
const :  locks the reference, not always the value
*/