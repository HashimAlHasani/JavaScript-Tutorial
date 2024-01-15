{
  //Memoization and Algorithm Optimization
  //It is faster to just lookup already calculated outputs instead of re-calculating it each time
  pow.calculated = {};

  function pow(x, y) {
    let stringVersion = x + "^" + y;
    console.log("string Version: " + stringVersion);

    //So in here we check if the result already exists in the object pow.calculated (Faster and more optimized)
    if (stringVersion in pow.calculated) {
      console.log("Found!");
      return pow.calculated[stringVersion];
    }

    console.log("CALCULATING!");
    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    //pow.calculated.push(total);
    //We store the stringVersion as the key in the pow.calculated object and assign the total as its value
    pow.calculated[stringVersion] = total;
    console.log(pow.calculated);
    return total;
  }
  //Output:
  // string Version: 3^3
  // CALCULATING!
  // {3^3: 27}
  // string Version: 3^3
  // Found!
  // string Version: 10^4
  // CALCULATING!
  // {3^3: 27, 10^4: 10000}
  // string Version: 10^3
  // CALCULATING!
  // {3^3: 27, 10^4: 10000, 10^3: 1000}

  pow(3, 3);
  pow(3, 3);
  pow(10, 4);
  pow(10, 3);
}
