// document.getElementById('four').addEventListener("click" , function(){
//     alert("you clicked 4th photo")
// },0)

//j query  on click event 


// document.getElementById('four').addEventListener("click" , function(e){
//     console.log("you clicked 4th photo")
//     // console.log(e);
//     e.stopPropagation(); // stop applying the execution
// },false) // true capturing evenyt first onbe get execute first 

// for interview
//target , toelement , srcelement , currenttarget
//type , timestamp , default prevent 
//clientx , clienty , screen x , screeny


//event propogation


// document.getElementById('three').addEventListener("click" , function(e){
//     console.log("you clicked third photo")
//     // console.log(e);
//     e.preventDefault(); // stop applying the execution
// },false)

// similarly we can select all using query selector

document.querySelector('#images').addEventListener("click" , function(e){
    
    if (e.target.tagName === 'images') {
        let removeit = e.target.parentNode;
         removeit.remove() //way 1
    // removeit.parentNode.removeChild(removeit); // way2
    }
   
},false)


