// DOM Manipulation

// 
// Text Content
// 

const heading = document.querySelector('h1');

// Changing text
heading.textContent = "Hello VBP, kaise ho?";
console.log(heading);

// Note:
// textContent --> gets/sets all text (including hidden)
// innerText --> only visible text
// innerHTML --> includes HTML tags



// Attribute Manipulation

// Select elements once (avoid repeating querySelector)
const link = document.querySelector('a');
const image = document.querySelector('img');


// 1. Set Attribute
link.setAttribute('href', 'https://www.google.com');

image.setAttribute(
  'src',
  'https://images.unsplash.com/photo-1578279043004-e218349bfdfd?q=80&w=1170&auto=format&fit=crop'
);
image.setAttribute('width', '600');


// 2. Get Attribute
const linkHref = link.getAttribute('href');
console.log(linkHref);


// 3. Remove Attribute
link.removeAttribute('href');