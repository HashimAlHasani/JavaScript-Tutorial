{
    let x = 5;
    let y = "10";
    //parseInt doesnt round it always cuts the decimal, use parseFloat to use decimals
    let yInt = Number.parseInt(y); //Change string into a number
    //console.log(x + y); //510
    console.log(x + yInt); //15
}