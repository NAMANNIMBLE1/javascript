// filter mapmreduce

const arr = [1,2,3,4,5,6,7,8,9,10];

const ans = arr.filter((num) => num>= 4)

// console.log(ans);

const a = [];  
arr.forEach((num) => {
    if(num >= 4){
        a.push(num);
    }
    // console.log(a);       
})

// console.log(a);

//map *************************************
let ab = arr.map((num) => num+10);
// console.log(ab);

//*********** reduce ******************** */
const mysum = [1,2,3];

const sum = mysum.reduce(function(acc , currval){
//     console.log(`${acc} , ${currval}`);
//    return acc + currval
}, 0) // accumulator value = 0 initialise ( we have 2 things accumulator and current value in reducer)

const sum1 = mysum.reduce((acc , curr)=> acc+curr, 0)
console.log(sum1);  