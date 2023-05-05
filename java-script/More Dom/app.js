// Creating an HTML Element - createElement()

let h1Element = document.createElement("h1");
h1Element.textContent = "Mern stack Developer";

console.log(h1Element);  // <h1>Web Technologies</h1>

// Appending to an HTML Element - appendChild()
// Appending to Document Body Object:

document.body.appendChild(h1Element);


// Appending to Existing Container Element:

let containerElement = document.getElementById("myContainer");
containerElement.appendChild(h1Element);



// Adding Event Listeners Dynamically

let btnElement = document.createElement("button");
btnElement.textContent = "Change Heading";
btnElement.classList.add("btn");
containerElement.appendChild(btnElement);


// Providing Class Names Dynamically - classList.add()
btnElement.onclick = function (){
    h1Element.textContent = "Frontend Developer";
    h1Element.classList.add("heading");
    h1Element.style.color = "indigo";
    h1Element.style.fontFamily = "Caveat";
    h1Element.style.fontSize = "40px";
    h1Element.style.textDecoration = "underline";
    
    
    
}


// Removing Class Names Dynamically - classList.remove()
let removeStyle = document.createElement("button");
removeStyle.textContent = "Remove Style";
containerElement.appendChild(removeStyle);


removeStyle.onclick = function(){
    h1Element.classList.remove("heading");


};
