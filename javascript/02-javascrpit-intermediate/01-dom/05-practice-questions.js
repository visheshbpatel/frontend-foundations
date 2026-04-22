// Q1. What is the DOM? How does it represent the HTML Structure ?
// DOM is a tree structure of the HTML page where each element becomes a node.
// It allows JavaScript to access and modify HTML.



// Q2. Name the types of nodes in the DOM Tree
// Element node, Text node, Attribute node, Comment node



// Q3. What is the difference between element node and text node
// Element node represents HTML tags
// Text node represents the content inside the tags



// Q4. What is the difference between getElementById and querySelector ?
// getElementById selects element by id only and returns one element
// querySelector uses CSS selectors and returns first matching element



// Q5. What does getElementByClassName return ? It is an array ?
// It returns HTMLCollection, not an array



// Q6. Use querySelector to select all buttons with class, buy-now
const buttons = document.querySelectorAll('.buy-now');



// Q7. Select the heading of a page by ID and change its text
const heading = document.getElementById('headingId');
heading.textContent = 'Namaste Duniya!';



// Q8. Select all <li> elements and print their text using a loop
const items = document.querySelectorAll('li');
items.forEach(item => {
    console.log(item.textContent);
});



// Q9. What's the difference between innerText, textContent, and innerHTML?
// innerText = only visible text
// textContent = all text (hidden + visible)
// innerHTML = HTML + text



// Q10. When should you use textContent instead of innerText ?
// When you need all text including hidden content



// Q11. Replace paragraph content
const p = document.querySelector('p');
p.innerHTML = "<b>Updated</b> by JavaScript";



// Q12. How do you get src of an image using JavaScript ?
const img = document.querySelector('img');
console.log(img.src);
console.log(img.getAttribute('src'));



// Q13. What does setAttribute() do ?
// It sets or updates an attribute
document.querySelector('img').setAttribute(
    'src',
    'https://images.unsplash.com/photo-1557401620-67270b61ea82'
);



// Q14. Update link href
const link = document.querySelector('a');
link.href = "https://www.youtube.com";



// Q15. Add a title attribute to a div dynamically
const div = document.querySelector('div');
div.setAttribute('title', 'Info');



// Q16. Remove the disabled attribute from a button
const btn = document.querySelector('button');
btn.removeAttribute('disabled');



// Q17. What does createElement() do ? what's returned ?
// It creates a new HTML element and returns that element
const newElement = document.createElement('div');



// Q18. Difference between appendChild() and prepend()
// appendChild adds element at the end
// prepend adds element at the beginning



// Q19. Can you remove an element using removeChild() ?
// Yes
const ul1 = document.querySelector('ul');
const firstLi1 = ul1.querySelector('li');
ul1.removeChild(firstLi1);



// Q20. Create a new list item and add it to <ul>
const list = document.querySelector('ul');
const li = document.createElement('li');
li.textContent = "New Task";
list.appendChild(li);



// Q21. Create a new image and add it at the top of a div
const newImg = document.createElement("img");
newImg.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s"
);
document.querySelector('div').prepend(newImg);



// Q22. Select the first item from the list and delete it
const ul2 = document.querySelector('ul');
const firstLi2 = ul2.querySelector('li');
ul2.removeChild(firstLi2);



// Q23. How do you change the background color of an element ?
const box = document.querySelector('div');
box.style.backgroundColor = 'blue';



// Q24. Difference between .classList.add() and .classList.toggle()
// add() always adds the class
// toggle() adds if not present, removes if already present
box.classList.add('active');
box.classList.toggle('active');



// Q25. innerText vs textContent vs innerHTML
// innerText = visible text
// textContent = all text
// innerHTML = HTML + text



// Q26. classList vs style property
// classList is used to add/remove CSS classes (better practice)
// style is used for inline styling (not scalable)
box.classList.add('highlight');
box.style.color = 'white';
