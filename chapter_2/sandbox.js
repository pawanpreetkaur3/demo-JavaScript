// let age = 25;
// let year = 2019;

// log things to console
// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;

// console.log(points);

// var score = 75;
// console.log(score);

// Strings
// console.log('hello, world');

// let email = 'mario@thenetninja.co.uk';
// console.log(email);

// string concatenation
// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// getting characters
// console.log(fullName[2]);

// string length
// console.log(fullName.length);

// string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// common string methods

// let email = 'mario@thenetninja.co.uk';

// let result = email.lastIndexOf('n');      // it means the position of last n

// let result = email.slice(0,5); // the first argument is where we want to slice from and the second argument is where we want to slice to.

// let result = email.substr(4,10);   // the first argument is start position and second is how many characters do we want to go long.

// let result = email.replace('m', 'w'); // the first argument is that we want to replace in string and second replaced it to.

// let result = email.replace('n', 'w');

// console.log(result);

// Numbers

let radius = 10;
const pi = 3.14;

// console.log(radius, pi);

// math operators +(addition), -(subtraction), *(multiplication), /(division), **(power of), %(remainder)

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S

// let result = 5 * (10-3)**2;

// console.log(result);

// let likes = 10;

// likes = likes + 1;    or likes++;
// likes++;
// likes--;

// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

// concatenate
// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

// template strings
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way  (is to allows us to inject variables directly into the string without coming out of it and having to concatenate with plus signs like this.)
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
// let html = `
//   <h2>${title}</h2>
//   <p>By ${author}</p>
//   <span>This blog has ${likes} likes</span>
// `;
// console.log(html);

// Object (Arrays)   use arrays to store collections of things in like a collection of strings or a collection of numbers. 

let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// array methods

// let result = ninjas.join(',');                       // string now joined all of the elements together with comma in between them.
// let result = ninjas.indexOf('chun-li');              // it's going to get me the index of this value inside the array.
// let result = ninjas.concat(['ken', 'crystal']);      // it is take our array and it concatenate another array with it. if we want to join two arrays together we use the concatenation.
// let result = ninjas.push('ken');                     // it is push on a new value onto the array and it return the length of new array.
// result = ninjas.pop()                               // it is take off the end value so it just added ken on but now we are taking it back off so when we output it we should just get the original array.

// console.log(result);

// Null and Undefined   // these two types are quite similar in that they both represents a complete lack of value. the only difference is that null is an intentional lack of value but undefined is not. 
// let age;         // undefined
// let age = null;     // null

// console.log(age, age + 3, `the age is ${age}`);

// Boolean   (it represent two special values in JavaScript true and false.)

// booleans & comparisons
// console.log(true, false, "true", "false");

// methods can return booleans
// let email = 'luigi@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('!');
// let result = names.includes('luigi');

// console.log(result);

// comparison operators
// let age = 25;

// console.log(age == 25);      // double equals means are these two things the same is age equal to 25 which is true.
// console.log(age == 30);      // age is not equal to 30 which is false.
// console.log(age != 30);      // age is not equal to 30 which is true.
// console.log(age > 20);       // age is greater than 20 which is true.
// console.log(age < 20);       // age is less than 20 which is false.
// console.log(age <= 25);      // age is less than or equal to 25 which is true. 
// console.log(age >= 25);      // age is greater than or equal to 25 which is true.

// let name = 'shaun';

// console.log(name == 'shaun');   // true
// console.log(name == 'Shaun');   // false
// console.log(name > 'crystal');  // true as c comes before s in order so later letter comes in alphabet is greater.
// console.log(name > 'Shaun');    // true as lowercase letter is greater than the uppercase letter.
// console.log(name > 'Crystal');  // again lowercase letter is greater than any uppercase letter.


let age = 25;

// loose comparison (different types can still be equal)
// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

// type conversion
let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');        // NAN
// let result = String(50);
// let result = Boolean(0);             // positive and negative numbers are considered a true T value in type conversion but 0 is false.    
let result = Boolean('');              // string of any length they are all true T but if we make it an empty string of no length then this would be false.

console.log(result, typeof result);