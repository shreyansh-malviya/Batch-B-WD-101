// Function that returns all even numbers from an arr

let arr = [1, 2, 3, 4, 5, 6]

function evenNumber(ar){
  let ans = []
  for(let i = 0; i < ar.length; i++){
    if(arr[i] % 2 == 0){
      ans.push(arr[i])
    }
  }
  return ans 
}
console.log(evenNumber(arr))


// Using filter 
let newArr = arr.filter(function(ele){
  return (ele%2 == 0)
})
let newArr1 = arr.map(function(ele){
  return (ele%2 == 0)
})
console.log(newArr) // [2, 4, 6]
console.log(newArr1) // [false, true, false, true, false, true]


// output => ['Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even']
let newArr2 = arr.map(function(ele){
  if (ele%2 == 0){
    return 'Even'
  }else{
    return 'Odd'
  }
})
console.log(newArr2)


let myArr = [1, 2, 5, 7, 8, 2, 6, 9, 13, 17]
// output => [13, 17]
let ans2 = myArr.filter(function(ele){
  return (ele > 10)
})
console.log(ans2)