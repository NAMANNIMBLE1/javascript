// this == current context 

const user = {
    name : "dog",
    price : 7837987,

    welcome : function(){
        console.log(`hello the ${this.name} price is ${this.price}`);
    }
};

console.log(user);
user.welcome();

console.log(this); // in browser window is this context

function naman(){
    const name = "naman";
    console.log(this.name); // not in scope
}

naman();



const nan = () => {
    const name = "naman";
    console.log(this.name); // not in scope
}

// implicit return

const gg = (n) => (n);

console.log(gg(10));


// explicit 

const a = (n) => {return n};

console.log(a(200));


