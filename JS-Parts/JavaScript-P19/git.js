{
    let name = prompt("What is my name?");
    //Ternary operator
    //So what the statement below is doing it will compare the name the user inputs with the string "Hashim"
    //if it does have a match it will assign the variable points to the number 10, if not it will assign
    //it to 0
    let points = name === "Hashim" ? 10 : 0;
    console.log(points);

    //So instead of writing all of this we can easily use the ternary operator above
    // if(name === "Hashim") {
    //     points = 10;
    // } else {
    //     points = 0;
    // }
}