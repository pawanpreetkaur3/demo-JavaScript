// function declaration
// function greet(){
//     console.log('hello there');
// }

// // function expression
// const speak = function(){
//     console.log('good day!');
// };

// greet();          // calling or envoking the function.
// greet();
// greet();

// speak();
// speak();
// speak();


// arguments & parameters

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

// speak();


// returning values

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log(area);


// regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// arrow function
// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is: ', area);


// practise arrow functions

// const greet = function(){
//     return 'hello, world';
// }

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// arrow function of above regular function

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10,15,30], 0.2));


// const name = 'shaun';

// functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// methods  - the method is invoked using dot notation.

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);


// callbacks & foreach 

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     // do something
//     console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// regular finction
// people.forEach(function(person){
//     console.log(person);
// });

// arrow function
// people.forEach((person, index) => {
//     console.log(index, person);
// });



// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`)
// };

// callback functions directly.
// people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

// people.forEach(function(person){
//     // create html template
//     html += `<li style="color: purple">${person}</li>`;
// });

// arrow function of above regular function
people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

