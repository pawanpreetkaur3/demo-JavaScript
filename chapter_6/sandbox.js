// const para = document.querySelector('body > h1');

// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para);
// });

// const errors = document.querySelectorAll('.error');

// console.log(errors);

// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);


// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText += 'ninjas are awesome!';     // use = to change the text of it and += to append it so it will add the new text with the previous text.

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// if I want to see the HTML of something
// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// if I want to update the HTML of something
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';   // override/change the component and append/add with previous component we use +=

// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// change the atttributes and update it browser as well
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'The Net Ninja Website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green');

// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';      // remove the above margin property

// how to add or remove classes from elements

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');      // add a class
// content.classList.remove('error');      // remove a class
// content.classList.add('success');

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.innerText.includes('success')){
//         p.classList.add('success');
//     }
// });

// // how to toggle classes
// const title = document.querySelector('.title');

// title.classList.toggle('test');
// title.classList.toggle('test');  // if I do it again it removes the toggle class that we just added.