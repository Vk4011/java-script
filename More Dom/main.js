

// Appending To Document Body Object

let h1Element = document.createElement('h1');
h1Element.textContent = "Web developer";

document.body.appendChild(h1Element);


//Appending to Existing Container Element 


let h2Element = document.createElement('h2');
h2Element.textContent = "Frontend Developer";
let containerElement = document.getElementById('myContainer');
console.log(containerElement);
document.body.appendChild(h2Element);
containerElement.appendChild(h2Element)


let btnElement = document.createElement('button');
btnElement.textContent = 'change heading';
containerElement.appendChild(btnElement);


//function


let showMessage  = function(){
    console.log('hello ');
};
showMessage();
