/* Block of code that performs a specific task, can be invoked whenever needed 

--> Funtion Defination
function functionName(){
// do some work
}

fnction functionName(param1, Param2..){
// do some work
}

--> Function Call / invoke
functionName();

*/

function functionName(){
  console.log("Hello world !")
  console.log("my name is prince panchal!")
  console.log("I am from partapur!")
  console.log("Hello world !")
}
functionName()
functionName()



function call(msg){ // Parameter -> input
  console.log(msg)
}
call("I love JS")// Argument -> output


// function - sum of two numbers 
function sum(x,y){
  console.log(x+y)
}
sum(1,2)


function sum1(x,y){ // function parameter -> they are local variables-(Block scope) of functions.
  s = x+y
  return s;
}
let num = sum1(2,3)
console.log(num)

