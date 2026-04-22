// Dynamic DOM Manipulation

// Create element
const heading1 = document.createElement('h1');
heading1.textContent = 'Namaste';

// Add to body
document.body.append(heading1);
// document.body.prepend(heading1);  // adds at the top


// appendChild example
const heading2 = document.createElement('h2');
heading2.textContent = 'This is the new h2';

const container = document.querySelector('div');
container.appendChild(heading2);


// Remove child
container.removeChild(heading2);

// Alternative (modern way)
// heading2.remove();