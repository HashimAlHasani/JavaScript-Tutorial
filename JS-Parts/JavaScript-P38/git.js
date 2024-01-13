//Hoisting
//The 2 primary ways of creating functions (Declaration or Expression) are hoisted differently

//Hoisting is the idea that when you have JS code it is going to be scanned first and then it is going to be
//executed second time - So basically we wil be going through the code 2 times and this happens automatically

//The only thing that happens at the first time none of the code is executed and what only happens the first time is
//variable declarations (note: not initialization)

//var is a function level varibale - let and const are block level variable
console.log(x); //undefined
var x = 10; //at first scan it will assign x to undefined, so undefind is printed, at second scan it will assign x to 10

//let and const are more procedural so if we use let and const we will get an error
//let and const are broken up into 3 parts - declaration -> initialization -> assignment
//little bit of hoisting happens for let and const where the declaration happens, but it is not initialized
//with the value of undefined, hence, we get the error, so no memory is given to this variable

console.log(x); //error
let x = 10;

//at first scan ignored - at second scan it will work as the function doStuff was scanned/declared in the first time
doStuff();
//at first scan it will hit this function declaration and the whole thing is hoisted so its basically declared
function doStuff() {
  console.log("Declaration");
}

//in the example below only the variable is hoisted, so var myFunc = undefined - as it goes in the first scan and assign
//undefined to it
myFunc(); //will produce an error because it is undefined
var myFunc = function () {
  console.log("Expression");
};
