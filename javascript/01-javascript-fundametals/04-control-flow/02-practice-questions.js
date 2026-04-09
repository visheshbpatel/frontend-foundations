/*
PRACTICE: CONTROL FLOW
*/

// 1. getGrade(score)

/*
Returns grade based on score (0–100)
*/

function getGrade(score) {
    // handle invalid input first
    if (score < 0 || score > 100) return 'Invalid Marks';

    if (score >= 90) return 'A+';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    if (score >= 33) return 'D';
    return 'Fail';
}

console.log(getGrade(99)); // A+
console.log(getGrade(242)); // Invalid Marks




// 2. Rock-Paper-Scissors

function rps(user, computer) {

    if (user === computer) return 'draw';

    if (
        (user === 'rock' && computer === 'scissor') ||
        (user === 'scissor' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ) {
        return 'user';
    }

    return 'computer';
}

console.log(rps('rock', 'scissor')); // user





// 3. SWITCH FALL-THROUGH (COMMON CONFUSION)

let x = 2;

switch (x) {
    case 2:
        console.log('Two');
    case 3:
        console.log('Three');
}


/*
Output:
Two
Three

Reason:
- Missing break causes fall-through
- Execution continues to next case
*/


// Correct version

switch (x) {
    case 2:
        console.log('Two');
        break;
    case 3:
        console.log('Three');
        break;
}