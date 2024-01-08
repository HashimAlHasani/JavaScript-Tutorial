{
  let grades = [20, 22, 39];
  let gradesB = [43, 12, 524, 34, 23];

  let gradesConcat = grades.concat(gradesB); //concat doesn't alter the original array it returns a new array that we can use
  console.log(gradesConcat); //[20, 22, 39, 43, 12, 524, 34, 23]

  let stringGrades = grades + gradesB; //would return a string
  console.log(stringGrades); //"20,22,3943,12,524,34,23"

  grades.includes(22); //would return true if 22 is in the grades array
  grades.indexOf(22); //would return the index, if it doesn't exist it will return a -1

  let joinGrades = grades.join();
  console.log(joinGrades); //"20,22,39"

  let joinGrades2 = grades.join(" ");
  console.log(joinGrades2); //"20 22 39"

  let joinGrades3 = grades.join("-");
  console.log(joinGrades3); //"20-22-39"

  let grades2 = [12, 123, 323, 243, 545, 234, 5435, 23423];
  let grades2Sliced = grades2.slice(3, 5); //it will return an array between index 3 inclusively and index 5 exclusively
  console.log(grades2Sliced); //[243, 545]
  console.log(grades2); //[12, 123, 323, 243, 545, 234, 5435, 23423] - original array isn't affected
}
