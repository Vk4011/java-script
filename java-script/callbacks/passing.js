//Passing a Function as An Argument

function displayGreeting (displayName){
    console.log("Hello");
    displayName();//function call  display name is function argument
    console.log("Good Morning!");




}

displayGreeting(function(){
    console.log("VIKRAM");
});