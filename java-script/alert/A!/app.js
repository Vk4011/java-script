alert("Enter the value of A!")
let a=prompt("Enter a here","1000")
a=Number.parseInt(a)
alert(" You entered a of type "+(typeof a))
let write=confirm("DO you want to write it to the page")

if(write){
document.write(a)
}
else{
    document.write("please allow me to write")
}