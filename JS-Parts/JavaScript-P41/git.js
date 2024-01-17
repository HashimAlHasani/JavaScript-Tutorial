{
  function pow(x, y, ...extra) {
    //or pow(x,y = 2) instead of the if and ternary operator below
    //if(y == undefined){ y = 2 } //this is more recommended when wanting to assign default parameters
    //y = typeof y === "undefined" ? 2 : y; //can be seen in older code

    //We can store all of the extra arguments used in this extra object by using - pow(x, y, ...extra)
    console.log(extra); //[4, 6, 3, 4]

    //Implicit parameters (this and arguments)
    console.log(this); //The window object
    console.log(arguments); //Will contain the argument data

    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    return total;
  }

  //there is no real concept of overloading in JS
  console.log(pow()); //1 - since total = 1
  console.log(pow(4, 2, 4, 5, 6, 7)); //16 - will only take the first 2 arguments 4^2

  //We can use default parameters
  console.log(pow(3, 3, 4, 6, 3, 4)); //9 - since we assigned y = 2 in the function pow parameter or using the if statment

  //Rest Parameters (...extra)
  //We can use the extra method in functions that would use all of the arguments without a specific argument size
  function largest(x, ...extra) {
    let largest = x;
    for (let i = 0; i < extra.length; i++) {
      if (extra[i] > largest) {
        largest = extra[i];
      }
    }
    return largest;
  }

  console.log(largest(3, 3, 4, 6, 3, 4, 25, 2000, 15)); //2000
}
