//objects 
// as litrels and as contructor
const sym =  Symbol("naman");// declaring sysmbol

const user = {
    name : "naman",
    class : "ece",
    [sym] : "naman",// imp symol declaration i n obj 
    section : 2,
    location : "delhi",
    email : "naman@gmail.com"
};//object litrels with key and values

//Object.create();


// console.log(user.section); // way 1
// console.log(user["email"]);// way 2
console.log(user[sym]); // print symbol
// console.log(typeof user[sym]);


// user.email = "vaibhav@21234gmail.com";

// console.log(user.section); // way 1
// console.log(user["email"]);// way 2
// console.log(user[sym]); // print symbol
// console.log(typeof user[sym]);


user.gretting = function(){
    console.log(`hello my name is ${this.name}`);
}

// console.log(user.gretting());


// ways to define object
const usr = new Object(); // single return 
const naman = {}; // multi return 

// console.log(usr);
// console.log(naman);


// obj me obj

const user2 = {
    email:"naman@gmail.com",

    fullname :{
        username : "naman nimble",
        sirname : "nimble"
    },
}
// console.log(user2.fullname);
// console.log(user2.fullname.sirname);

//acces all keys to run loops used  in database 
console.log(Object.keys(user2.fullname));
console.log(Object.keys(user2));
console.log(Object.values(user2));
console.log(Object.entries(user2));
//obj combine 

let obj1 = {
    1 : "one ",
    2 : "two",
}

let obj2 = {
    3 : "three",
    4 : "four",
}


const obj3 = {obj1 , obj2}; // wrong
const obj4 = Object.assign({} , obj1 , obj2); // way to merge **********
const obj5 = Object({...obj1 , ...obj2}); // way to merge using spread method and most used

// console.log(obj3);
// console.log(obj4);
// console.log(obj5);

console.log(obj1.hasOwnProperty('fullname')); // to check a property


