// Object.getOwnPropertyDescriptor(Math.PI);

// console.log(Math.PI)


// const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI');

// console.log(descriptor);


const user = {
    name : "naman" ,
    rollnumber : 19
};

// const ans = Object.getOwnPropertyDescriptor(user , "name");
// console.log(ans);


// const a = Object.defineProperty(user , "name" , {
//     writable : false ,
//     enumerable : false,
//     configurable : false,
// })

// console.log(a);

for (const [key,value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
}

