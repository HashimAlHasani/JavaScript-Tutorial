function doSomething() {
  return 1 + 1;
}

//doSomething --> object.constructor --> doSomething

let test = new doSomething();

if (doSomething.prototype === Object.getPrototypeOf(test)) {
  console.log("match");
}

//Constructors work by transferring the prototype of the function to each of the objects that it created
function Taco() {
  this.toppings = ["cheese"];
}

Taco.prototype.make = function () {
  console.log("Making a taco...");
};

//each object created from the constructor is going to share the same prototype object (saves memory)
let myTaco = new Taco();
let newTaco = new Taco(); //These myTaco and newTaco will have the same prototype object
