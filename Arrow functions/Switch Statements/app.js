let day =5;

switch (day){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    
    case 3:
        console.log("wednesday");
        break;
    
    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    
    case 6:
        console.log("Saturday");
        break;
    
    default:
        console.log(Invalid);
        break;
    
    }

    //if break statement is missed ,the next cases are also executed until the next break statement 


    let a=9;
    let b=6;
    let operation = "add";
    switch(operation){
        case "add":
            console.log(`a+b = ${a+b}`);//no break missing break statement
        case  "sub":
            console.log(`a-b = ${a-b}`);
            break;
        default:
            console.log("Invalid Operation");

    
    
    
    
    
    
    
    }