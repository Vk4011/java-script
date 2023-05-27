

document.getElementById('btn').addEventListener("click",Event);

function Event(){
    console.log("\n\t Button Clicked !")
    const promiseObj=fetch('data.txt')
    console.log(promiseObj)
    promiseObj.then((res)=>{console.log(res); return res.text( )}).then
    ((data)=>{console.log(data)})
}

let b = document.getElementById('Fetch')


let btnE=document.getElementById('btn')



b.addEventListener("click",()=>{
    console.log("\n\t Fetching....!")
    b.textContent = "Wait..!";
    btnE.style.color="black" ;

    fetch('data1.txt').then((response)=>{
        console.log(response);
        return response.text()
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{console.log(error)})
})

