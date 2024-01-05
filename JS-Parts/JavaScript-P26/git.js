{
    //user input into an array
    let grades = [];
    
    while(true){
        let input = prompt("Add a grade");

        //if either the user inputs a q or clicks the cancel it will break from the loop
        if(input === "q" || input === null){
            break;
        }

        grades.push(Number(input));
        console.log(grades);
    }
}