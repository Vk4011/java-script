//using Function Expression
//callback function passing argument
//Passing Function as an Argument 

// this is Callback  Function
/**A Callback is a function that is passed as an argument to another function. */


function displayGreeting(displayName){
    console.log("Hello");
    displayName();
    console.log("Good Evening!");
}

let displayRam = function(){
    console.log("Ram");
}

displayGreeting(displayRam);
