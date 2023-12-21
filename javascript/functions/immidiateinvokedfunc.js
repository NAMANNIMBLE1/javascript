(function naman(){
    console.log("hello naman nimble");
})();

// fast call for the function instantly

// ()()
// first for function and second for calling

(
    () => {
        console.log("hello vauibhav");
    }
)(); // ; imp to end the code without ; code wont run



(
    (name) => {
        console.log(`hello ${name}`);
    }
)("naman nimble");


