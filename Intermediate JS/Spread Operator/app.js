//Spread Operator
//Spread Operator is used to unpack iterable (e.g an array) it into individual elements.

let arr1 = [2,3];  //...arr1
let arr2 = [1,...arr1,4];
let arr3 = [5,4,arr1,1];
console.log(arr3);
console.log(arr2);


//Concatenation

let a1=[2,3];
let a2=[4,5];
let a3=[...a1,...a2];
console.log(a3);

//Spread Operator with Objects

let person = {name: "ram",age:20};
let personDetails = {...person};
let d ={...person,city:"Anantapur"};
console.log(personDetails);
console.log(d);







//Spread operator with Function calls



//Spread Operator syntax can be used to pass an array of arguments to the function.



function add(a,b,c){
    return a+b+c;
}
let numbers = [1,2,3];
console.log(add(...numbers)); // unpacking as arguments in python we use print(add(*numbers))

// Spread Operator with Function Calls
//Extra Values will be ignored if more arguments are passed than function parameters

function sum(a,b,c){
    return a+b+c;
}
let num = [1,2,3,4,5];
console.log(sum(...num));// extra arguments are ignored output is 


//Rest Parameter
//With Rest parameter ,
//we can pack multiple values
//into an array

// function N(...args){
//     console.log(args);
// }
// N(1,2,3,4,5,6,7,8,9,10);

function N(a,b,...rest){
    console.log(a);
     console.log(b);
     console.log(rest);
}
N(1,2,3,4,5); //Rest Parameter should be the last parameter



function s(...args){
    let result = 0;
    for(let arg of args){
        result=result+arg;
    }
    console.log(result);
}
s(1,2,3);
s(1,2,3,4,5,6);
console.log(s(5,5,5,5,5));


