{
  //Arrow function
  () => expression;

  //Same as the bellow
  function doSomeT() {
    let expression = 0;
    return expression;
  }

  doSomeT(5);

  let func = (x) => x * x;
  func(5);

  //The parenthesis is actually optional when we have one parameter in the arrow function
  //The parenthesis is only required when we have 0 or 2 or more parameters
  let func2 = (x) => x * x;
  func2(5);

  //If we want to write a more complex function we can add the curly braces with the return keyword
  let func3 = (x) => {
    let name = "Hashim";
    return x * x;
  };
  func3(5);

  //The "this" keyword in the arrow function is always going to be the same
}
