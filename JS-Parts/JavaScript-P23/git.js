{
    //We can change the length of an array by assigning a value to the array.length method (array.length = 30)
    //We can assign to an index that does not exist and it will extend the array (array[100])
    //the arrays can have gaps

    //the elements of the array can be anything
    let stuff = [12, "string", function(){console.log("Hello!")}, [1,2,3]];
    
    stuff[2](); //Hello!

    //single array
    let single_array = [36, 12, 44];

    //multi-dimensional array
    let multi_dimensional_array = [ [36,12,44] , [100,100,100] , [12, 13, 14] ];

    console.log(multi_dimensional_array[2][1]); //13
}