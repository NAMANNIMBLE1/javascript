// var c = 10;

// if (true) {
//     let a = 10;
//     c = 300;
// }

// //console.log(a); // oput of scope
// console.log(c); // 300

// var c = 10;

// if (true) {
//     let a = 10;
//     var c = 300;
// }

//console.log(a); // oput of scope
// console.log(c); 

function one(){
    let username = "naman";
    function two(){
        const website = "wwkewfj";
        console.log(username);
    }
    console.log(website);
    two();
}

one();