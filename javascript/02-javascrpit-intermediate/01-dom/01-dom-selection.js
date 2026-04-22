// DOM : Document Object Model

// Topics:
// 1. Selecting elements
// 2. Changing text
// 3. Changing HTML
// 4. Changing CSS
// 5. Attributes
// 6. Event listeners


// Element Selection


// 1. Select by ID
let elementById = document.getElementById('ab');
console.log(elementById);

// 2. Select by Class Name (HTMLCollection)
let elementsByClass = document.getElementsByClassName('abc');
console.log(elementsByClass);

// 3. Select using querySelector (first matching element)
let firstHeading = document.querySelector('h1');
console.log(firstHeading);
console.dir(firstHeading);

// 4. Select using querySelectorAll (NodeList)
let allHeadings = document.querySelectorAll('h1');
console.log(allHeadings);

// Note:
// NodeList looks like an array but is not a real array