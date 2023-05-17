
setTimeout(function(){
    console.log("SetTimeout in 2 sec")
},2000)

let promise = new Promise(function(resolve,reject){

    alert("THE Promise")
    resolve(56)

})

console.log(promise)




let p = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and i am resolve")
        resolve(true)
    },5000)
})

console.log(p)

let p1  = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        
        // console.log("I am a promise and i am rejected")
        reject(new Error(" I am an error"))
    },5000)
})


console.log(p1)

p.then((value)=>{
    console.log(value)
})

p1.catch((error)=>{ 
    console.log("Some error occured in p2")
})




        //fetch API

let prom = fetch("https://weatherapi-com.p.rapidapi.com/current.json")

// prom.then((vale1)=>{
//     return vale1
// }).then((vale2)=>{
//     return vale2.json()
// })
prom.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    console.log(response.text())
    return response.json()
})

prom.then((value2)=>{
    console.log(value2)
})

 