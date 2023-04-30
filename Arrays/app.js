let myArray = [ 5,"four",2,6.7]
console.log(myArray);

//Accessing an Array item

console.log(myArray[0]);
console.log(myArray[1]);


//Modifying an Array item

myArray[1]= "first";
console.log(myArray);

myArray[0]=10;
console.log(myArray);


//Array length
let lengthOfArray = myArray.length;
console.log(lengthOfArray);


//Push() method adds new items to the end of the array

myArray.push(true);
myArray.push("hello");
console.log(myArray)

// pop() method removes the last item of an array, and returns that item.

let arr = [5,4,6,7,8.9];
let lastItem = arr.pop()
console.log(lastItem);
console.log(arr);

