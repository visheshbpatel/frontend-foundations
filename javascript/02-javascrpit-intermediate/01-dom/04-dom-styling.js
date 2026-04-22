// CSS Manipulation

const heading = document.querySelector('h1');

// Inline styles
heading.style.color = 'pink';
heading.style.backgroundColor = 'red';
heading.style.fontFamily = 'monospace'; // fixed font name
heading.style.textTransform = 'capitalize';

console.log(heading);


// Class manipulation
heading.classList.add('perfect');
// heading.classList.remove('perfect');
// heading.classList.toggle('perfect');