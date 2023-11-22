/* forEach(HOF:-Higher Order Function / HOM:-Higher Order Mathods) Loop in Arrays
arr.forEach(callBackFuction)

- CallbackFunction : Here, it is a function to execute for each element in the array 

- *A callback is a function passed as an argument to another funtion.

*/

let arr = [1,2,3,4,5]

arr.forEach(function printval(val){
  console.log(val)
})
//Arrow Function use
arr.forEach((val) => {
  console.log(val)
})

let arr1 = ["mumbai", "delhi", "pune","banglore"]
arr1.forEach(function printval(val){
  console.log(val.toUpperCase())
})

//Arrow Function use
arr1.forEach((val,idx,arr) => {
  console.log(val.toUpperCase(),idx,arr)
})



