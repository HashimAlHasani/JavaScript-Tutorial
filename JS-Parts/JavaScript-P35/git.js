//Default function declaration
function square(x) {
  return x * x;
}

//Javascript is very flexible when it comes to arguments, for example, we can do this:
square(5, 10, "Hello");
//However, the values 10 and "Hello" will not be accessible (but it won't produce an error)
//function overloading is not practically possible in JavaScript

//Functions in JS are called first class citizens
//Functions are objects (we can treat them the same way)
//we can assign functions to a variable, we can create an array of functions
//we can make functions assigned to properties to create methods
//we can pass a function to a function (callback function)
//we can return functions from functions (output functions)

//if we pass an object as an argument, it will point to a certain area in memory,
//so now if we change that object inside of the function it is going to be visible outside the function
//because it will point to the same area in memory, so the object itself can be affected from what's
//inside the function

function func(x) {
  x.name = "Sally";
}

let me = { name: "Hashim" };
func(me);
console.log(me.name); //the object got affect and this outputs: "Sally"

//However, if we did this:
function func2(x) {
  x = {}; //assign x to a new object
  x.name = "Sally";
}
let me2 = { name: "Hashim" };
func2(me2);
console.log(me2.name); //the object is not affected and this outputs: "Hashim"

//JavaScript is a passed by value language, but sometimes that value is a reference (like in objects)
