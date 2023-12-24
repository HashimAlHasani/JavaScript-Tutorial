{
    var name = prompt();
    var example = "Hashim"; //This is hard coding - using some generalization such as a database is better

    if(name === "Hashim") { //identitiy operator //strict equality 
    //data type differs in === so 5 doesnt equal "5", but in == it doesn't matter as it will do a data type conversion behind the scenes
        console.log(`Welcome ${name}!`); //Welcome Hashim!
    } else if(name === "Tomi") {
        console.log("Welcome Tomi!") //Welcome Tomi!
    } else {
        console.log("You are not welcome!");
    }

    // Comparision Operators
    // Equal(==)
    // not Equal (!=)
    // Strict Equal (===)
    // Strict not Equal (!==)
    // Greater than (>)
    // Greater than or equal (>=)
    // Less than (<)
    // Less than or Equal (<=)

    // Logical Operators
    // AND (&&)
    // OR (||)
    // NOT (!)
}