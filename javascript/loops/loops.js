const array = [10,20,30,40,50,60];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    // console.log(index);
    if(index == 3){
        break;
    }
    if(index == 3){
        continue;
    }
    // console.log(element);
}

let i = 0;
do {
    // console.log("hello")
    i++;
} while ( i < 10);


//****************************************** */

//for of
const arr = [1,2,3,4,5];

for (const i of arr) {
    // console.log(arr);
    // console.log(i); // 1 to 5 value
}

//maps

const map = new Map();

map.set('hello' , "india");
map.set('olleh' , "england");

// console.log(map);

for (const key of map) {
    // console.log(key)
}

for (const [key , value] of map) {
    // console.log(key ,'=>', value);
}

//for in **************************************

const user = {
    name : "naman",
    class : 'ece'
};

for (const key in user) {
    // console.log(user[key]);
}

//for each


arr.forEach( (element) => {
    console.log(element);
});

