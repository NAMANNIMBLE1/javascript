//dates 

let dates = new Date();
console.log(dates);
console.log(dates.toISOString);

console.log(dates.toDateString);
console.log(dates.toString()); // oreffered for now

console.log(typeof dates);


let doc = new Date(2023 , 0 , 23);

console.log(doc);
console.log(doc.toString());
console.log(doc.toLocaleString());

let date = new Date("10-10-2003");
console.log(date.toLocaleString());


let a = Date.now();
console.log(a);

console.log(date.getTime());


//get day get month etc i can use 

a.toLocaleString('default' , {
    weekday : "long" ,
})

