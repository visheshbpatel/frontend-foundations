// Local Storage

// Local Storage
// Stores data in browser even after closing it

// Session Storage
// Stores data temporarily (cleared when tab is closed)

// Cookies
// Stores small data (~4KB), used for sessions and tracking


// localStorage methods

// Store
localStorage.setItem('name', 'vishesh');

// Fetch
const value = localStorage.getItem('name');
console.log(value);

// Remove
localStorage.removeItem('name');

// Update (same key overwrites value)
localStorage.setItem('name', 'vishesh');
localStorage.setItem('name', 'madhav');

// Clear all data
// localStorage.clear();


// Storing arrays and objects

const friends = ['madhav', 'buddy', 'kunal'];

// Convert to string before storing
localStorage.setItem('friends', JSON.stringify(friends));

// Convert back to array
const storedFriends = JSON.parse(localStorage.getItem('friends'));
console.log(storedFriends);


// Cookies

console.log(document.cookie);

// Example
// document.cookie = "username=vishesh";


// Q1 Why only strings work in localStorage
// localStorage stores data as key value string pairs
// so arrays and objects must be converted using JSON.stringify()


// Q2 Understanding cookies
// Cookies are small data stored in browser
// They are sent to server with every request
// Used for login sessions and tracking