{
  function pow(x, y) {
    //Declaration
    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    return total;
  }

  console.log(pow(3, 3)); //27 - invocation
}

//We can also do this:
{
  let myFunc = function (x, y) {
    //expression
    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    return total;
  };

  console.log(myFunc(3, 3)); //27 - invocation
}
