

let inputElement = document.createElement("input");

inputElement.addEventListener("keydown",printKeyDown)

// function printKeyDown(){
//     console.log("key is pressed");

// }

document.body.appendChild(inputElement);


function printKeyDown(event){
    console.log(event.key); //event.type type,target

} 