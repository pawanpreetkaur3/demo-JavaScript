// object literals

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// access and update properties using square bracket notation
// console.log(user['location']);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);

// object literals

// array is blogs and title are the elements in it.
// const blogs = [
//     { title: 'why mac and cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
// ];

// console.log(blogs);

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: [
//         { title: 'why mac and cheese rules', likes: 30 },
//         { title: '10 things to make with marmite', likes: 50 }
//     ],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },
//     logBlogs(){
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         });
//     }
// };

// user.login();
// user.logout();
// user.logBlogs();
// console.log(this);

// const name = 'mario';
// name.toUpperCase();


// Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));     // it round the value that is close to it
// console.log(Math.floor(area));     // it rounds to lowest value.
// console.log(Math.ceil(area));      // it rounds to highest value.
// console.log(Math.trunc(area));     // it takeaway the decimal and leave the integer.

// // random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));   // this is a good way to get a random number between 1 and 100.

// primitive values    // if one is changed other has not any effect.

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values  // if one is changed the other also change with same value.

// const userOne = { name: 'ryu', age: 30 };
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userTwo.name = 'chun-li';
// console.log(userOne, userTwo);