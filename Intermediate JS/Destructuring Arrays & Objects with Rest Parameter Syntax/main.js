let [a,b,c] = [1,2,3];
console.log(a);
console.log(b);
console.log(c,"\n");
//Unpacking and destructuring Arrays

// let [x,y,...rest] = [0,7,3,4,5,6];
// console.log("\n",x);
// console.log(y);
// console.log("\t",rest);

//Destructuring Objects

let {firstName,...rest} = {
    firstName: "Mark",
    lastName: 42,
    age: 21

};

console.log(firstName);
console.log(rest);
