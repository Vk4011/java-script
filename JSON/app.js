


const h1Element = document.getElementById("h1")

let myBtn = document.getElementById("mybtn");

let content = document.getElementById("content");


myBtn.addEventListener("click",color)


function color(){
    h1Element.style.color = "aqua";
}





function getData(){
    fetch(url).then((response)=>{
        return response.text();
    }).then((data)=>{
        console.log("Inside first then ")
        console.log( data);

    })
}


console.log("Before running get data")
getData()
console.log("After running getData")