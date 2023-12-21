let naman = "naman nimble ";
let anothername = "vaibhav nimble";
anothername = "tushar" // copy changed to tushar 

console.log(anothername);


let user = {
   email : "namannimble@gmail.com",
   upi : "@123paytm.com"
}

let ans = user.email;
console.log(ans);


let user2 = user1 // getting user 1 by reference

user2.email = "naman@gmail.com";

console.log(user2.email); // check terminal