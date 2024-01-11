{
  //we can use strings to search dates
  let myDate = Date.parse("12 Jan 1995 00:15:54 GMT");
  console.log(myDate); //the date in milliseconds

  let myDate2 = new Date("12 Jan 1995 00:15:54 GMT");
  console.log(myDate2); //Thu Jan 12 1995 03:15:54 GMT+0300 (Arabian Standard Time)

  //We can search the internet for many more methods with dates if needed

  let myDate3 = new Date(2012, 11, 15, 10, 10, 10);
  console.log(myDate3); //Sat Dec 15 2012 10:10:10 GMT+0300 (Arabian Standard Time)
  console.log(myDate3.getFullYear());
  console.log(myDate3.getTimezoneOffset() / 60); //-3 is the difference between local computer time and UTC ,hence, GMT+0300.
}
