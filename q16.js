// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list..
//name array
var guestArray = ["fatima", "suman", "hareem"];
//cannot make dinner
var canNotAttend = "hareem";
//invite new guest
var NewGuest = "halima";
guestArray[guestArray.indexOf(canNotAttend)] = NewGuest;
//send message
//guestArray.map((items)=> console.log(`Hello,${items} you are invited to dinner`))
console.log("Welcome all we found a bigger dinner tsble!");
guestArray.unshift("noreen");
var middleGuest = "aqsa";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("suman");
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " you are invited to dinner!")); });
