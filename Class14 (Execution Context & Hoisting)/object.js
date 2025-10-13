let employee = {
  name : 'Shaurya', 
  age : 18, 
  gender : 'male' ,
  email : 'shaurya@gmail.com' ,
  isPresent : true
}

console.log(employee)
console.log(employee.gender) // Dot Notation
console.log(employee["email"]) // Bracket Notation''

// Update properties
employee.age = 20 
employee['isPresent'] = false 

// Add new property
employee.id = 3187 
console.log(employee)

// Delete property 
delete employee.gender
console.log(employee)

employee.hobbies = ['reading', 'table tennis']
console.log(employee)

// variable storing keyName 
let keyName = 'hobbies'
// Dot notation will not work
console.log(keyName + " :  " + employee[keyName])