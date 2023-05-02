//Template Literals (Template Strings)

// Template Literals are enclosed by the backticks(` `)
//They are used to
//*Embed Variables or Expressions 
//in the strings
//Write multiline Strings


//These variables or Expressions are included using dollar sign with curly braces ${}
   
let firstName = "World";
console.log(`hello ${firstName} ! ` );


let result  = `The sum of 4 and 5 os ${4+5}.`;
console.log(result);

//Object property 
let person = { name : "Ram"};
console.log(`My name is ${person.name}`);

//Multiline String

let Name="Vikram";
console.log(`Hello ${Name},
Good Morning,
Have a nice day !`);