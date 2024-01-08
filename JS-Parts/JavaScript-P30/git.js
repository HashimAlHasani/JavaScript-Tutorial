{
  let grades = [12, 13, 32, 43, 42, 23];
  grades.length = 30;

  // for(let i = 0; i < grades.length; i++){
  //     if(grades[i] !== undefined) console.log(grades[i]);
  // }

  //The forEach will only work with elements that are not undefined
  //We are also using a callback function
  //We are working with the element directly and we are not using an index
  //To access the index we can add another parameter, hence, the i below
  //To get the original array we can add another parameter, hence, the variable array below (probably useless)
  //function(element, index, array)
  grades.forEach(function (element, i, array) {
    console.log(element, i, array);
  });
}
