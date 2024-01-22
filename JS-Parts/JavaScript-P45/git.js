{
  //Normal function Declaration
  function cube(x) {
    return x * x * x;
  }

  //Arrow function expression
  let cubeArrow = (x) => x * x * x; //When we put the curly braces {return x*x*x;} we have to add the return keyword
  let cubeArrowComplex = (x) => {
    console.log("Calculating...");
    return x * x * x;
  };

  console.log(cube(5)); //125
  console.log(cubeArrow(5)); //125
  console.log(cubeArrowComplex(5)); //Calculating... \n 125
}
