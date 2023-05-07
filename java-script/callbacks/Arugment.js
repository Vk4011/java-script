
//passing as function declaration
function displayGreeting(displayName){
    console.log("Hello");
    displayName();
    console.log("Good morning!");
}

function displayVkm(){
    console.log("ram");
}

displayGreeting(displayVkm);
