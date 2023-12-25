{
    let name = prompt("What is your name?");

    switch (name) {
        case "Hashim":
            console.log("Welcome!");
            break;
        case "Tomi":
            console.log("Get out of here!");
            break;
        case "x":
        case "y": //if we want either x or y with the same output we can list them like this
            console.log("for both x and y!");
            break;
        default:
            console.log("I guess you're welcome.")
            break;
    }

    if(name === "Hashim") console.log(`Hello ${name}!`); //Single line if line
}