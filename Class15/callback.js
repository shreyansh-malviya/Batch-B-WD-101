// We are given an array, which has the radius of 
// different circles, we need to find the area, 
// circumference and diameter for all the radiuses.

let RadiusArr = [2, 4, 8, 10]
function circleArea(r){
  return 3.14*r*r;
}
function circleCircumference(r){
  return 2*3.14*r;
}
function circleDiameter(r){
  return 2*r;
}
function calculateCircleDetails(arr, cb){
  let ans= []
  for(let i = 0; i < arr.length; i++){
    ans.push(cb(arr[i]))
  }
  return ans
}
console.log(calculateCircleDetails(RadiusArr, circleArea))
console.log(calculateCircleDetails(RadiusArr, circleCircumference))
console.log(calculateCircleDetails(RadiusArr, circleDiameter))

/*
// Traditional Way
let RadiusArr = [2, 4, 8, 10]
// calculateArea = []
// calculateCircumference = []
// calculateDiameter => ans =  [4, 8, 16, 20]

function calculateArea(arr){
  let area = []
  for(let i = 0; i < arr.length; i++){
    area.push(3.14 * arr[i] * arr[i])
  }
  return area
}
function calculateCircumference(arr){
  let cir = []
  for(let i = 0; i < arr.length; i++){
    cir.push(2 * 3.14 * arr[i])
  }
  return cir
}
function calculateDiameter(arr){
  let dia = []
  for(let i = 0; i < arr.length; i++){
    dia.push(2* arr[i] )
  }
  return dia
}
console.log(RadiusArr)
console.log(calculateArea(RadiusArr))
console.log(calculateCircumference(RadiusArr))
console.log(calculateDiameter(RadiusArr))

*/