{
    let grades = [1,2,3,4,5,6,7,8,9];
    console.log(grades); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

    grades.pop(); //removes the last element of the array
    console.log(grades); //[1, 2, 3, 4, 5, 6, 7, 8]

    grades.push(10); //adds the number 10 at the end of the array
    console.log(grades); //[1, 2, 3, 4, 5, 6, 7, 8, 10]

    grades.unshift(11); //adds the number 11 at the beginning of the array
    console.log(grades); //[11, 1, 2, 3, 4, 5, 6, 7, 8, 10]

    grades.shift(); //removes the first element of the array
    console.log(grades); //[1, 2, 3, 4, 5, 6, 7, 8, 10]

    let cut = grades.splice(2, 3); //start at index 2 and delete 3 items
    console.log(grades); //[1, 2, 6, 7, 8, 10]
    console.log(cut); //[3, 4, 5] 

    grades.splice(2, 0, 12, 13, 14, 15); //so we start at index 2, we remove nothing hence the 0, and add the rest numbers (12, 13, 14, 15)
    console.log(grades); //[1, 2, 12, 13, 14, 15, 6, 7, 8, 10]

    grades.splice(2, 4, 0, 0, 0, 0); //so we start at index 2, we remove the next 4 values, we replace them with the value of (0, 0, 0, 0)
    console.log(grades); //[1, 2, 0, 0, 0, 0, 6, 7, 8, 10]
}