{
    let grades = [1, 2, 0, 0, 0, 0, 6, 7, 8, 10];
    
    grades.push(13, 12, 14, 15, 16, 22, 32, 5, 4);

    grades.sort(); //we can notice the sort is not 100% as we want since it sorts the first number then the second number
    console.log(grades);//[0, 0, 0, 0, 1, 10, 12, 13, 14, 15, 16, 2, 22, 32, 4, 5, 6, 7, 8]

    //we can use a callback function that would help us achieve the correct sorting that we want
    //A callback is a function passed as an argument and then invoked inside
    grades.sort(function(a, b){return a - b});
    console.log(grades); // [0, 0, 0, 0, 1, 2, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16, 22, 32]

    grades.reverse();
    console.log(grades); //[32, 22, 16, 15, 14, 13, 12, 10, 8, 7, 6, 5, 4, 2, 1, 0, 0, 0, 0]

    grades.fill(-1, 0, grades.length); //we fill using the first value -1, start at index 0 till the index grades.length exclusively
    console.log(grades); //[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
}