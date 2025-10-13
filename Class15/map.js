//given an array of numbers and 
// we want the square of every number of an array. 

let arr = [1, 2, 3, 4, 5, 6]

function square(ar){
  let ans = []
  for(let i = 0; i < ar.length; i++){
    ans.push(ar[i]*ar[i])
  }
  return ans 
}
console.log(square(arr))

let newArr = arr.map(function(ele, idx){
  console.log(`${ele} is at ${idx}`)
  return ele*ele
})
console.log(newArr)

// Another Way
let RadiusArr = [2,4,6,8];
function square(a){
return a*a;
}
let newArr1 = RadiusArr.map(square);
console.log(newArr1);