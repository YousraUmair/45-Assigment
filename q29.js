//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favoriteFruits = ["Apple", "Banana", "Orange"];
//if (favoriteFruits.includes("Mango")) {
console.log('i would like to eat Mango');
//}
//if (favoriteFruits.includes("Apple")){
//   console.log('i would like to eat Apple')
//}else {
//   console.log(`fruits are not available!`)
//}
var fruitAvailable = "orange";
if (favoriteFruits.includes(fruitAvailable)) {
    console.log('i would like to eat ${fruitAvailable}');
}
else {
    console.log("fruits are not available!");
}
