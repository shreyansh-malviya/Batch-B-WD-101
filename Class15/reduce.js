// function that return sum of all elements 

let arr = [1,2,3,4,5]
// ans => 15

function sumOfAllEle(arr1){
  let sum = 0;
  for(let i = 0; i < arr1.length; i++){
    sum += arr1[i]
  }
  return sum
}
console.log(arr)
console.log(sumOfAllEle(arr))

//arr = [1,2,3,4,5]
/*
res = 0
res += 1
res += 2
res += 3
res += 4
res += 5
res = 15


*/
let ans =  arr.reduce(function(res, curr){
  res += curr
  return res 
}, 0)

// defualt initial value => first elemnet of array

console.log(ans)

// use Reduce() to find product of all elements 

let ans2 =  arr.reduce(function(res, curr){
  res *= curr
  return res 
}, 1)

console.log(ans2) // 120