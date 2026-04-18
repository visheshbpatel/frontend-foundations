/*
OBJECTS IN JAVASCRIPT
*/


// 1. CREATE OBJECT

let obj = {
    name: 'vishesh',
    age: 26,
    flag: true
};

/*
- name, age, flag --> keys
- 'vishesh', 26, true --> values
*/


// 2. ACCESS VALUES

console.log(obj.name);       // dot notation
console.log(obj["name"]);    // bracket notation

let keyName = 'name';

// obj.keyName  // wrong
console.log(obj[keyName]);   // correct



// 3. NESTED OBJECTS

const user = {
    name: 'vbp',
    address: {
        city: 'indore',
        pin: '000000',
        locations: {
            lat: 0.0,
            lng: 0.0,
        },
    },
};

console.log(user.address.locations.lng);


/*
Nested structure is called object nesting
*/



// 4. DESTRUCTURING

let { lat, lng } = user.address.locations;

console.log(lat);
console.log(lng);



// 5. LOOPING OVER OBJECT

let data = {
    name: 'vishesh',
    age: 22,
    email: 'vbp@gmail.com'
};


// keys
for (let key in data) {
    console.log(key);
}


// values
for (let key in data) {
    console.log(data[key]);
}


// key + value
for (let key in data) {
    console.log(key, data[key]);
}



// 6. OBJECT METHODS

console.log(Object.keys(data));     // array of keys
console.log(Object.values(data));   // array of values
console.log(Object.entries(data));  // array of [key, value]



// 7. COPY OBJECT (SHALLOW COPY)

let obj2 = { ...data };

// older way
// let obj2 = Object.assign({}, data);



/*
Add new property while copying
*/

let obj3 = Object.assign({ year: 3 }, data);



// 8. DEEP CLONING

/*
Spread only copies one level
Nested objects still share reference
*/

let obj4 = JSON.parse(JSON.stringify(user));



/*
Limitation:
- does not work with functions, undefined, Date, etc.
*/



// 9. OPTIONAL CHAINING

console.log(user?.address?.city);

/*
Prevents error if property does not exist
*/



// 10. COMPUTED PROPERTIES

let role = 'learner';

let data2 = {
    name: 'vishesh',
    age: 22,
    email: 'vbp@gmail.com',
    [role]: 'vbp'
};

console.log(data2.learner);

