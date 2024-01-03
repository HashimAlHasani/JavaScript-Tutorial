{
    let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43, 43];

    let found = false;
    let search = 43;

    let largest = grades[0];
    let indexLargest = 0;

    for(let i = 0; i < grades.length; i++){
        if(grades[i] === search){  //if(grades[i] !== undefined) to remove undefind elements
            found = true; //could be used as a flag for later use
            console.log(grades[i] + " at index " + i);
            break;
        }
    }

    if (found){
        //do something
        console.log("Found!");
    }

    //To find the largest number
    for(let i = 0; i < grades.length; i++){
        if(grades[i] > largest){
            //replace largest
            largest = grades[i];
        }
    }
    console.log(largest); //66

    //To find the index of the largest number
    for(let i = 0; i < grades.length; i++){
        if(grades[i] > grades[indexLargest]){
            //replace to find the index of the largest number
            indexLargest = i;
        }
    }
    console.log(indexLargest); //3
}