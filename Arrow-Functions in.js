/* Arrow Functions in JavaScript
- Compact way of writing a function

const functionName = (param1,param2..) => {
// do some work
}
*/


// sum function 
function sum(x,y){
  console.log(x+y)
}
const arrowSum = (x,y) => {
 console.log(x+y)
}
arrowSum(2,3)

// Multiplication function
function mul(a ,b){
  console.log(a*b)
}
const arrowMulti = (a,b) =>{
  console.log(a*b)
}
arrowMulti(2,3)


const printHello = () =>{
  console.log("Hello!")
}
printHello()
