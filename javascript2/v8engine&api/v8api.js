const urls = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'

let xhr = new XMLHttpRequest(); //sending request
xhr.open('GET' , urls); // making request open

xhr.onreadystatechange = function(){ // to tract state 
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
    //    console.log(this.responseText);
    }
}

xhr.send(); // sending request to get the ans 