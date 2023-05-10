//Synchronously execution

alert("first Line");
alert("second line");
alert("third line");
let apiData ;
const url = "https://jsonplaceholder.typicoe.com/user";
fetch(url).then((response)=>{
         apiData=response.json();
         console.log(apiData);
    })
    .catch((error)=>{
        console.log(error)
    });


console.log("fetching done");

//fetch is asynchronous operation

// const url = "resource_ul";
// fetch(url)
// .then((response) =>{
//     return response.json();
// })

// .then((jsonData)=>{
//     console.log(jsonData);
// });
// console.log("fetching done");



// in synchronus, the second statement of code executes only after the completion 
// of the first statement

// in Asynchronous, the second statement won't wait until first statement execution
