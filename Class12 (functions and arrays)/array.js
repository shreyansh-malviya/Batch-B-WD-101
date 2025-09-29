let fruits = ["apple", "kiwi"]

console.log(fruits); //['apple', 'kiwi']
console.log(fruits.length); // 2
console.log(fruits[0]); //apple
console.log(fruits[2]); //undefined

fruits[1] = "orange";
console.log(fruits); // ['apple', 'orange']

fruits[2] = "banana";
console.log(fruits); // ['apple', 'orange', 'banana']

fruits[4] = "peach";
console.log(fruits); // ['apple', 'orange', 'banana', empty, 'peach']
