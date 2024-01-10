{
  let grades = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [5, 3, 6, 7, 9],
  ];

  //we just gave the outer loop a label called outerLoop
  outerLoop: for (let i = 0; i < grades.length; i++) {
    for (let k = 0; k < grades[i].length; k++) {
      console.log(grades[i][k]);
      if (grades[i][k] === 7) {
        console.log("You found the value");
        //break; - breaks out of the inner for loop - the "~~~~~~" is printed and the outer loop will go to next iteration
        //continue; - go to the next iteration of the inner for loop
        //continue outerLoop;
        //it is going to continue to the next iteration of the outer loop,
        //and is very similar to using break inside the inner loop, however,
        //it will skip anything coming after this unlike the break, so the "~~~~~~"
        //will not be printed

        break outerLoop; // - breaks out of the outer for loop, hence we exit all of the loop
      }
      console.log("doing stuff"); //if continue hits, it will skip printing the "doing stuff"
    }

    console.log("~~~~~~~");
    //if continue outerLoop hits, it will skip printing the "~~~~~~~"
    //if we use a break in the inner loop, and it hits, it will print the "~~~~~~~"
  }

  //break outerLoop will send us to here!
}
