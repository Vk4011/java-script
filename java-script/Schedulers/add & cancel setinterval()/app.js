
const hEl = document.getElementById("h1");
let set = document.getElementById("setIntervalBtn");
const clr = document.getElementById('clearIntervalBtn');


let uniqeId = null;

set.onclick = function(){
    let counter = 0;
    hEl.style.color="Red";
    uniqueId=setInterval(function(){
        hEl.style.color = "cyan";
    console.log(counter);

    counter = counter+1;

} ,2000);
}

clr.onclick = function(){
    clearInterval(uniqeId);
    console.log("Interval cleared");
    hEl.style.color = "white";
}