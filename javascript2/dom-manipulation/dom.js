// document.getElementById('heading').textContent = "hello namam";

//query selectors 


document.querySelector('p').textContent = "hello vaibhav how are you";


document.querySelector('input').type = "text"; // turing into text type


document.querySelector('input').style.padding = "30px"; // change padding of input


/// converting html elemnet node list to array and performing moperations

let all = document.querySelectorAll('li');

let newarray = Array.from(all); // to change into array 

newarray.forEach(function(li){
     li.style.color = "orange";
})





