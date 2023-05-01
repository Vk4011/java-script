

const btnEl = document.querySelector(".btn");
const bodyEl = document.querySelector("body");

var colors = ["violet","indigo","skyblue","orange"];


btnEl.addEventListener("click",addcolor);
let count = 100;
function addcolor(){
    console.log("onclick");
    
    let color  = parseInt(Math.random()*colors.length);
    bodyEl.style.backgroundColor=`rgba(${count},${color},255,0.8)`;
    count+=25;
    console.log(count);
}
