/* Some More Array Methods 

Map :- Creates a new array with the result of some operation. The value its callback return are used to from new array

arr.map(callbackfnx(value,index,array))

*/

let num = [1,2,3,4,5,6,7]

let newArr = num.map((value) =>{ // Create a new array
  return value*value
})
console.log(newArr)// new array output

console.log(num)//old array output




/* Filter :- Creates a new array of elements that give true for a condition/filter.
Eg. all even elements

let newArr = arr.filter(val) =>{
return val %2 ===0
}
*/
let num2 = [1,2,3,4,5,6,7]
let evennum = num2.filter((value) =>{
  return value%2===0
})
console.log(evennum)

  

/* Reduce :- Perform some operations & redues the arrayto a single value. It returns that single value.

*/
let arr = [1,2,3,4]
const arr2 = arr.reduce((prev, curr) =>{
return prev + curr  
})
console.log(arr2)//10


// largest number
const arr3 = [1000,1235,903,400]
let arr4 = arr3.reduce((prev, curr) =>{
return prev > curr ? prev : curr 
})
console.log(arr4)//1235
