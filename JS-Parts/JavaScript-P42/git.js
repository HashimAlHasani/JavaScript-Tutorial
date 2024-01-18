//1 - This - is an implicit argument that is passed to the function
//2 - The value of this changes based on how we call the function
//3 - Most of the time this is going to refer to an object that has a method on it
{
  let me = {
    name: "Hashim",
    outputMe: outputMe,
  };

  function outputMe() {
    console.log(this);
  }

  function outputMeStrict() {
    //This will change the functionality of various JS pieces,
    //basically to help protect you from common flaws of JS
    "use strict"; //Using this string will mean everything in this function is going to be in strict mode
    console.log(this);
  }

  function Person() {
    console.log(this);
    this.name = "Hashim";
    console.log(this); //Person {name: 'Hashim'} - since we assigned this.name = "Hashim"
  }

  me.outputMe(); //invoke as a method - We get: {name: 'Hashim', outputMe: ƒ} (the object me)
  outputMe(); //invoke as a function - We get the window object
  outputMeStrict(); //invoke a function in strict mode - We get undefined
  let person = new Person(); //invoke a function as a constructor (using the new Person()) - We get a new empty object
}
