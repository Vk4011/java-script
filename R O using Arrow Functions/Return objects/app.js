//Returning Objects

let createUser = name =>{
    return{
        firstName: name
};
};
console.log(createUser("Vikram"));



// Arrow functions - With Simple Expression
// Returning Objects

let cu = name => {firstName:"ram"};
console.log(cu());  

// java script consider two braces as code block, but not as an object Syntax
// output : undefined

let c= name => ({firstName : "Vikram ram"})
console.log(c());

// Wrap Object with Parentheses,
// // in order to distinguish with block CSSLayerStatementRule
// output: Object{firstName : "Vikram ram"}

