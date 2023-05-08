// // The preventDefault() Method

// The preventDefault() method prevents the occurrence of default action normally

// Here in the form, it prevents the default behaviour of submit event

let form = document.getElementById("myform");

form.addEventListener("submit",function(){
    event.preventDefault();
});

// html Forms 
// Default Behaviour 

// whenever we click a button or press Enter key 
// while editing any input field of a form 
// submit event will be triggered 




//Event Object
// it consists of many properties and methods:
// preventDefault()
// type
// target 
// key 
// timeStamp
// many more


// Event Types


// Keyboard Events
// Mouse Events
// Touch Events
// Form Events
// many more.. 


// Field level validations

// Form Events
// A Form Event is an event that can occur within a form

// Form Events:

// blur
// focus
// ChannelMergerNode


// The Blur Event  happens when an element has lost focus

let nameEl = document.getElementById("name");
nameEl.addEventListener("blur", function(event){
    console.log("blur Event triggered !");
    if(event.target.value === ""){

    }else{
        
    }
});

