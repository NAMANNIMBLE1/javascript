// random color generator 

function randomvcolor(){
   let hex = '0123456789ABCDEF';
   let color = '#';

   for (let index = 0; index < 6; index++) {
    color += hex[Math.floor(Math.random()*16)];
   }
   return color;
};


// console.log(randomvcolor());
let stopping; /// due to the scope issue declkared here 

const changeco = function(){

     stopping = setInterval(change , 1000); // take a function

    function change(){ // function execution
        document.body.style.backgroundColor = randomvcolor();
    }
};

const endco = function(){
    clearInterval(stopping);
};

document.getElementById('main').addEventListener('click' , changeco)

document.getElementById('main1').addEventListener('click' , endco)