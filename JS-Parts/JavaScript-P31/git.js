{
  let grades = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [5, 3, 6, 7, 9],
  ];

  // for(let i = 0; i < grades.length; i++){
  //     for(let k = 0; k < grades[i].length; k++){
  //         console.log(grades[i][k]);
  //     }
  //     console.log("~~~~~~~");
  // }

  //How to access multi-dimensional arrays using the forEach method with callback function, which is easier and neater
  grades.forEach(function (row) {
    row.forEach(function (col) {
      console.log(col);
    });
    console.log("~~~~~~~");
  });
}
