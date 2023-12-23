// const promise =  new Promise((resolve, reject) => {
//     //do async task 
//     // cryptography , network , db calls
//     setTimeout(function name() {
//         console.log("asnync task is complete");
//         resolve();// to connect with .then
//     },4000)
// });


// promise.then(function(){
//     console.log("then task complete")
// })


//way 2
// new Promise((resolve, reject) => {
//     //do async task 
//     // cryptography , network , db calls
//     setTimeout(function name() {
//         console.log("asnync task is complete");
//         resolve();// to connect with .then
//     },4000)

// }).then(function(){

//     console.log("then task complete")
// });

// sending data object

// const promise3 = new Promise((resolve, reject) => {
  
//   setTimeout(function(){
//     resolve({username : "naman" , class : "ece"}) 
//   },1000)

// }).then(function(user){ 

//     console.log(user.username)

// })


// const promise4 =  new Promise((resolve, reject) => {
  
//     setTimeout(function(){
//        let error = false //true
//        if(!error){
//          resolve({username : "naman" , class : "ece"})
//        }else{
//            reject('something is wrong');
//        }
//     },1000)

// }).then(function(user){
//     console.log(user);

//     return user.username;

// }).then((username)=>{

//     console.log(username);

// }).catch(function(error){

//     console.log(error);

// }).finally(function(){

//     console.log("promise is ended here , either resolved or rejected");
// })

//new approach
// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//        let error = false; // true
//        if(!error){
//         resolve({username : "naman" , class : "ece"});
//        }
//        else{
//         reject('ERROR : something went wrong')
//        }

//     },1000)

// })

// async function copromis(){
//     try {
//         const res = await promise5;
//         console.log(res);   
//     } catch (error) {
//         console.log(error)
//     }
// }

// copromis();


// async function copromis(){
//     try {
//         const res = await fetch('https://citizenrequests.herokuapp.com');
//         const data = res.json();
//         console.log(data);

//     } catch (error) {

//         console.log("E :" , error);
//     }
// }

// copromis()

//using next method easy for me

const api = fetch('https://citizenrequests.herokuapp.com')
.then((Response)=>{ 

    const data = Response.json();
    return data;

}).then((data)=>{

    console.log(data);

}).catch((error)=>{
    
    console.log("there is error");
})


