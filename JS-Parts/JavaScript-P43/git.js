{
  //This is known as the function context
  function doStuff(input, input2) {
    console.log(input, input2);
    console.log(this);
  }

  //call and apply change the value of this right when we invoke the function
  doStuff.call("Hello", 5, 10); //using the call method we can specify what the value of this should be as the first argument
  doStuff.apply("Hello", [5, 10]); //Same using as call but the only difference is we put the arguments as an array

  //bind will give a new functions where the value of this is permanently changed
  let newFunction = doStuff.bind("Hello", 5, 10); //This doesn't call the function, all it does is create a new function
  newFunction();
}
