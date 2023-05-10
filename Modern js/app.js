// older way

// let myArray = new Array("a",2,3,4.5,true);
// myArray.push("pen");
// console.log(myArray);
// console.log(myArray.length);

const formData = new FormData() 

//modern way

let Array = ["vikram",436.5,21,7,false,4];
Array.pop(4);
console.log(Array);
console.log(Array.length);
// console.log(Object.getPrototypeOf(Array));

//Accessing prototype of instance

let arr = new Array("a",2,true);
let sport = new Array("cricket","football");
console.log(Object.getPrototypeOf(sport));

//prototype in multiple instance


// let myFunction = new Function("para1,para2..",`code`);

let car = new Function (
    "color,brand",` 
                    this.color=color;
                    this.brand=brand;
                    this.start = function(){
                        console.log("started");

                };`);
console.log(Function.prototype);

// Modern way of Writing

function Car(color , brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
    console.log("started");
    };

}
console.log(Object.getPrototypeOf(Car));
