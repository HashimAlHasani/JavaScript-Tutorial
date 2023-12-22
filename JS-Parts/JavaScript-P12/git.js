{
    //var input = prompt("Put in a number:");

    //console.log("Decimal      :", input);                       //11
    //console.log("Binary       :", Number.parseInt(input, 2));   //3
    //console.log("Octal        :", Number.parseInt(input, 8));   //9
    //console.log("Hex          :", Number.parseInt(input, 16));  //17
    

    //we need to convert the input into a number because prompt returns a string and toString needs a number
    var input = Number(prompt("Put in a DECIMAL number:"));
    console.log(input, "in decimal to decimal:", input);                //11
    console.log(input, "in decimal to binary:", input.toString(2));     //1011
    console.log(input, "in decimal to octal:", input.toString(8));      //13
    console.log(input, "in decimal to hex:", input.toString(16));       //b
}