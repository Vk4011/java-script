//Ternary Operator
//A Ternary Operator can be used to replace
//if...else statements in some situations

let speed = 70;  //by if...else
let message;
if(speed>=100){
    message = "TOO fast";
}else{
    message = "OK";

}
console.log(message);

//using Ternary Operator

let s=70;
let m=s>=100? "Too fast" :"ok";
console.log(m); // out is ok 
//Ternary Operator is used to write code simple to if else code.

//Format is condition? expression1 : expression2;

let a=10;
let b=20;
let minValue;
if(a>b){
    minValue = b;

}else{
    minValue=a;
}
console.log(minValue);


//using Ternary operator
// let a=50;
// let b=20;
// let minValue = (a>b)? b:a;
// console.log(minValue);

