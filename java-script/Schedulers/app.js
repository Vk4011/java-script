//Schedulers
/* Schedulers are used to schedule the execution of a callback function.
There are different scheduler methods
.setinterval()
.clearinterval()
.setTimeout()
.clearTimeout()

*/

// callback functions are executed in regular intervals

/*
setInterval()

it allows us to run a function repeatedly, 
at the specified interval of time.

*/

/* setInterval syntax

setInterval(function ,delay)

function : A Callback function that is called 
repeatedly at the specified interval of time.

delay = Time in milli seconds

    
    
*/

let counter = 0;
setInterval(function(){
    console.log(counter);
    counter=counter+1;

},1000);

// clearInterval()

// clearInterval() cancels a schedule 
// previosly set up by calling setInterval().toFixed

// To execute clearInterval(), we need to
// pass the uniqueld returned by
// setInterval().

// Syntax

// setInterval()

// let uniqueld = setInterval(function , delay);

// uniqueld = avariable that saves the id returned by setInterval().

// Syntax
// clearInterval()

// clearInterval(uniqueId)

// uniqueId = returned by setInterval method



// //Shedulers
// setTimeout()

// The setTimeout() method
// executes a function
// after the specified TimeRanges

// setTimeout(function,delay)  A Callback function that is called after the specified time. 



// Cancelling Schedulers 
// clearTimeout()
// we can cancel the setTimeout()
// before it executes the callback function
// using clear Timeout.

// To execute clearTimeout(), we need to Pass 
// the uniqueld returned by setTimeout().


// Syntax 
// setTimeout()

// let uniqueId = setTimeout (function,delay);
// uniqueId - a variable to save the id returned by setTimeout()

// function - A Callback function to be called after the specified TimeRanges.apply
