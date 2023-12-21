function naman(){
    console.log("first function");
}

naman();


// way 2 modern way to define 

naman = () =>{
    console.log("arrow function");
}

naman();


// function and objects 

function nex(...n1){
    return n1
}

console.log(nex(34000 , 200 , 20000));

//******************** */

const arr = [1,2,3,4];

function abc(value){
    return value[2];
}

console.log(abc(arr));

