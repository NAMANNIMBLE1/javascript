function addlanguage(language){
    const list = document.createElement('li');
    list.innerHTML = language; // `${language}`
    document.querySelector('.language').appendChild(list);
}


addlanguage("python")
addlanguage("java")


// optimise method

// function addlanguage(language){
//     const list = document.createElement('li');
//     list.appendChild(document.createTextNode(language));
//     document.querySelector('.language').appendChild(list);
// }

// addlanguage("python")
// addlanguage("java")


//edit 
// const secondelement = document.querySelector('li : nth-child(2)');

// const edit = document.createElement("li")
// edit.textContent = "typescript"
// secondelement.replaceWith(edit)

// remove 
const last = document.querySelector('li:last-child');
last.remove();

