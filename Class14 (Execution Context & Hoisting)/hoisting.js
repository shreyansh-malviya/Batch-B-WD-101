// console.log(a) // Error:  Cannot access 'a' before initialization
console.log(sumExpr)
let a
console.log(a) // undefined

a = 20
console.log(a)  // 20
let b = 30

let sumExpr = function(num1, num2){
  var ans = num1+num2
  return ans
}