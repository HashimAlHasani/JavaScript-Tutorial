{
    let myName = "Hashim";
    console.log(myName[2]); //s

    //We can use special characters such as \n to print a new line

    console.log("My Name is " + myName + "!"); //My Name is Hashim!
    console.log(`My Name is ${myName}!`); //My Name is Hashim! 
    //Be cautious we are using a single backtick ` to use this technique

    let test = "this is a very long string\
 this long string is very\
 still going"; //We can use the backslash \ in order to break line and continue the string on the line below

    console.log(test); //we need to delete the space before the string when we backslash
    //using word wrap in vsc is easier

    console.log(myName.length); //6 - it gives the length of the string
}