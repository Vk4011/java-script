

// console.log(
// fetch('https://reqres.in/api/users/23')// fetch is a promise based we use then catch
// )


// fetch('https://reqres.in/api/users')
fetch('https://reqres.in/api/users',{
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify( {
        name: 'user 1'
    })
})

// .then(res => console.log(res)) // response object 

// .then(res =>res.json())
.then(res =>{
    // if(res.ok){
    //     console.log("SUCESS")
    // }else {
    //     console.log("Not sucessful ")
    // }
    
    return  res.json()})





.then( data => console.log(data)) // we get object  {}
.catch(error => console.log('Error'))
