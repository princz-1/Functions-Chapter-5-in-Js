// For a given array of numbers, print the square of each value using the forEach loop.

let num = [1,2,3,4,5,6,7,8,9,10]

num.forEach(function printnum(num){
  console.log("Square",num,"is :",num*num)
})

// Arrow function
num.forEach((num) => {
  console.log("Square",num,"is :",num*num)
})

// new Question
let num1 = [1,2,3,4,5,6,7,8,9,10]
let calcSquare = (num) => {
    console.log("Square",num,"is :",num*num)
  }

num1.forEach(calcSquare)
