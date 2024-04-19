//name array
let guestArray:string[] = ["fatima","suman","hareem"];

//cannot make dinner
let canNotAttend:string = "hareem";
//invite new guest
let NewGuest :string ="halima";
guestArray[guestArray.indexOf(canNotAttend)]=NewGuest;

guestArray.unshift("noreen");

let middleGuest:string = "aqsa";
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);

guestArray.push("suman");
console.log(guestArray);

console.log("we can invite only two people dinner");

while(guestArray.length>2){
   let removeguest = guestArray.pop();
console.log(`\nsorry ${removeguest} we cant't  invite you to dinner!`);
}

guestArray.map((item)=> console.log(`\n${item}you are still  invited to dinner!`))

guestArray.pop();
guestArray.pop();
console.log(guestArray);