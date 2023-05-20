

console.log('\n\t Prototypes')

const x={
    Name  : "Mark",
    Age   : "21",
    year  : "3rd year",
    height: "6.3",
    weight: "70"
}

console.log(x)



let Prototypes ={
    run: ()=>{
        alert("self run")
    }
}
x.__proto__= Prototypes
x.run()

Prototypes.__proto__={
    name: "RAM"
}

console.log(Prototypes.name)