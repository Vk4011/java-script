//An Arrow Function is a simple
//and concise syntax for defining functions

//it is an alternative to a function expression

// = >

//Function Expression
// let sum = function (param1,param2, ...){
    //statement(s)
// };
// sum();

//Arrow Function
// let  sum = (param1,param2, ...) =>{
//     //statement(s)
// };
// sum();

//Example Function Expression

let sum = function (a,b){
    let result = a+b;
    return result ;

};
console.log(sum(4,5));


//Arrow function

let sub = (x,y) =>{
    let r= x-y;
    return r;
}
console.log(sub(6,5));

