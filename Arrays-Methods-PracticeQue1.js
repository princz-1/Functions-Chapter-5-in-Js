// We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [99,87,65,56,35,90,91,97,99]

let res = marks.filter((value) => {
  return value > 90
})
console.log(res)
