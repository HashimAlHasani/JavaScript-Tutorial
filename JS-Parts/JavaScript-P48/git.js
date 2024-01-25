{
  //Exceptions Throw, Catch, Finally

  //We only use exceptions when we face exceptional cases where control flow (if-switch statments) doesn't help us
  //solve such cases

  try {
    doesntexist;
  } catch (e) {
    //Catch will catch the exception - As long as we have the finally section we can delete the catch section
    console.log("Catch"); //Will print only if there was an exception
    console.log(e); //information about the exception
  } finally {
    //Finally will execute some code no matter what
    console.log("test"); //Will always print
  }

  console.log("~~~~~~~~~~~");

  function doSomething() {
    throw { error: "This broke", code: -1 }; //We throw error object
  }

  //doSomething(); - this will print as an error: Uncaught -> {error: 'This broke', code: -1}

  try {
    doSomething();
  } catch (e) {
    console.log(e);
    console.log("Error");
  } finally {
    console.log("Wrapping things up...");
  }

  console.log("~~~~~~~~~~~");

  throw new Error(); //Special constructor that will create an error for us
}
