{
  let arrow = () => this;

  function normal() {
    return this;
  }

  console.log(arrow()); //Window object
  console.log(normal()); //Window object

  //The "this" keyword value in the arrow function will always be the same no matter how we call the arrow function

  let functions = {
    this: this,
    arrow: arrow,
    normal: normal,
    arrowTest: () => this,
  };

  console.log(functions.arrow()); //Window object
  console.log(functions.normal()); //The object itself - {arrow: ƒ, normal: ƒ}
  console.log(functions.arrowTest()); //Window object

  function normal2() {
    return this;
  }

  //The whole point of the arrow functions is to get the value of this from the parent context
  let arrow2 = () => this;
  let newFunc = arrow2.bind("Hello");
  console.log(newFunc()); //We still get window although we used the bind method, it doesn't change the value of this

  console.log(normal2.bind("This")()); //For example here we set the value of "this" to equal the String 'This'
}
