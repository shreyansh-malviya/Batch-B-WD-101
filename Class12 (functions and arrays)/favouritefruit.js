function fruitChoice(favFruit){
  let fruit = favFruit.toLowerCase();
  switch(fruit){
    case "apple":
      console.log('Red fruit')
      // break;
    case "banana":
      console.log('Yellow fruit')
      // break;
    case "kiwi":
      console.log('Brown fruit')
      // break;
    case "orange":
      console.log('Orange fruit')
      // break;
    default:
      console.log('New Fruit')
  }
}

fruitChoice('apple');
// fruitChoice('Apple');
// fruitChoice('APPLE');
// fruitChoice('peaches');

