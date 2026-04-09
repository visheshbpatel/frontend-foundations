/*
CONTROL FLOW IN JAVASCRIPT

Used to control how code executes based on conditions
*/


// 1. IF, ELSE IF, ELSE

let loggedIn = true;
let admin = false;

if (loggedIn && admin) {
    console.log('Admin Logged In');
} else if (loggedIn) {
    console.log('You are logged in');
} else {
    console.log('Please log in');
}


/*
- if runs when condition is true
- else if checks another condition
- else runs when all conditions are false
*/




// 2. SWITCH CASE

let val = 1;

switch (val) {
    case 1:
        console.log('case-1');
        break;
    case 2:
        console.log('case-2');
        break;
    case 3:
        console.log('case-3'); 
        break;
    default:
        console.log('default');
}


/*
- Used when comparing one value with multiple cases
- break prevents fall-through
*/




// 3. EARLY RETURN PATTERN

function getVal(score) {
    if (score < 25) return 'D';
    if (score < 50) return 'C';
    if (score < 75) return 'B';
    return 'A';
}

console.log(getVal(89)); // A


/*
- Returns immediately when condition is met
- Avoids deep nesting
- Makes code cleaner and easier to read
*/