const newelement = document.createElement('div')
// console.log(newelement);

newelement.className = "newel"
newelement.id = "hello"
// . setattribut


newelement.style.backgroundColor = "green"
newelement.style.padding = "30px"


//newelement.innerHTML = "hello naman" //method1


//method 2
const texta = document.createTextNode("naman nimble")
// newelement.appendChild(texta);
document.body.appendChild(texta) // to display on website

