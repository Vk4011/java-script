let alertShow = false;

setInterval(()=>{
    document.title = 
    alertShow ?"welcome to DOM"
    :"i love coding! ";
    alertShow = !alertShow;

},1000);


// document.getElementById("headingElement")

// console.log(document.getElementById("headingElement")).textContent ="Ram"

// document.getElementById("headingElement").style.color = "red";

// document.getElementById("headingElement").textContent = "ram";

//onclick  Event 

function manipulateStyles(){
    document.getElementById("headingElement").style.color = "red";
    document.getElementById("headingElement").textContent = "ram";


}

