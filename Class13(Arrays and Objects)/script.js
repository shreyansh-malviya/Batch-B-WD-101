/*
let arr = ["Priyanshi", 25, 10, 9, 25, true] 
console.log(arr)


// indexOf(element) : Returns the first index at which a given element 
// can be found in the array, or -1 if it is not present.
console.log(arr.indexOf(25)); // 1
console.log(arr.indexOf(false)); // -1


// includes(element): Determines whether an array contains a certain \
// element, returning true or false 
console.log(arr.includes(25)); // true
console.log(arr.includes("Hello")); // false

// concat() : used to merge two arrays 
let healthyFood = ['salad', 'fruits', 'sprouts', 'vegetables']
let junkFood = ['Burger', 'soft Drinks', 'Pizza']

let food = healthyFood.concat(junkFood);
console.log(food) 
let food2 = junkFood.concat(healthyFood);
console.log(food2) 


//split() 
let sentence = 'My name is Priyanshi'
let wordsArray = sentence.split(" "); // ['My', 'name', 'is', 'Priyanshi']
console.log(wordsArray);

let str = "Hello"
let splitArray = str.split("");
console.log(splitArray) //  ['H', 'e', 'l', 'l', 'o']

let str2 = "word1.word2.word3";
let splitArr = str2.split(".");
console.log(splitArr) // ['word1', 'word2', 'word3']

*/
let str = "Hello"
let splitArray = str.split("");
console.log(splitArray) //  ['H', 'e', 'l', 'l', 'o']


console.log(splitArray.join('')); // Hello
console.log(splitArray.join(' ')); // H e l l o
console.log(splitArray.join()); // H,e,l,l,o