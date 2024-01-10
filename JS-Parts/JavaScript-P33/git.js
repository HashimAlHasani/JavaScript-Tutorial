{
  let myDate = new Date(); //Date is a constructor, a constructor is a special function that will return an instance of something
  //To create an object from a constructor we need to use the new keyword
  console.log(myDate);

  //it calculates from the unix epoch which is Jan 1st 1970
  console.log(Date.now()); //it will return a value in milli-seconds

  //We can use the Date.now() before and after a code operation and subtract after - before = the time the code operation took
  let start = Date.now();

  let x = 0;
  for (let i = 0; i < 10000000; i++) {
    x = x + i;
  }

  let end = Date.now();
  let total = end - start;
  console.log("Time took: " + total + "ms");
  console.log(x);

  //To know the number of days between 2 dates
  let before = new Date(2020, 10, 15); //the months in here start from 0, so the number 10 is actually november
  let after = new Date(2020, 10, 20);

  let oneDay = 1000 * 60 * 60 * 24;
  let days = (after - before) / oneDay;
  console.log(days); //5
}
