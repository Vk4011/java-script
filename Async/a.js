


console.log("\n\t Async functions ")

async function n() {
    return "WELLCOME to ASYNC";
}

n().then((x)=>{
    alert(x)
})


let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("The first promise")
    },3000)
})

let promise2= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("The second promise")
    },5000)
})

console.log(promise1,promise2)

async function weather(){
    let Aw = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Kashmir  weather :   10  deg c")
        },1000)

    })
    let Tw = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Banglore weather :    29  deg c")
        },1000)

    })
    Aw.then(alert)
    Tw.then(alert)


    console.log("\n\t\tFetching weather please wait ...")
    let a=await Aw
    console.log("\n\t\tFetching weather is sucess : "+a)


    console.log("\n\t\tFetching weather please wait ...")
    let t=await Tw
    console.log("\n\t\tFetching weather is sucess : "+t)


    return [a,t]
    
}

weather()

console.log("\n\n\t Welcome to Weather control room !")

let p=weather()
console.log(p)



let x=weather()
x.then((value)=>{
    console.log(value)
})


const s = ()=>{
    console.log("\n\t I am student ")
}
const data = ()=>{
    console.log("\n\t Weather  data : ")
    x.then((value)=>{
        console.log(value)
    })

}
data()
s()



console.log("\n\t fetching the data ....   The END ")




