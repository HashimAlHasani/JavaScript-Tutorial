{
  //Function as first class citizens objects
  function pow(x, y) {
    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    return total;
  }

  //we can add functions to an array
  let coolFunctions = [pow];
  console.log(coolFunctions[0](3, 3));

  //We can add functions to an object as a property (method)
  let mathFunctions = {
    power: pow,
  };
  console.log(mathFunctions.power(3, 3));

  //We can add properties to a function
  pow.description = "Will raise numbers to a power";
  console.log(pow.description);

  //We can pass a function to a parameter (callback functions)
  function callBackExample(callback) {
    return callback(3, 5);
  }

  console.log(callBackExample(pow));

  //We can return a function
  function returnAFunction() {
    return pow;
  }

  console.log(returnAFunction()(10, 3));
}
