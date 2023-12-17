{
    var slicesOfPizza = 10;
    console.log(slicesOfPizza % 4.25); //1.5 is the result % is the modulus operator

    var precedence1 = 5 + (3 * 12) - (20 / 10);
    console.log(precedence1); //39
    // modulus (%) have the same precedence as * and /

    //    + - * / %    

    //slicesOfPizza = slicesOfPizza + 1;

    //slicesOfPizza++; //post-fix increment by 1
    //++slicesOfPizza; //pre-fix increment by 1
    //console.log(slicesOfPizza); //11

    //slicesOfPizza--; //post-fix decerement by 1
    //--slicesOfPizza; //pre-fix decerement by 1
    //console.log(slicesOfPizza); //9

    let newPizza = slicesOfPizza++; //a pre-fix increment would be better so that newPizza = 11
    console.log("slicesOfPizza:", slicesOfPizza); //slicesOfPizza: 11
    console.log("newPizza:", newPizza); //newPizza: 10

    //We can also use this for faster arithmetic operations:
    slicesOfPizza *= 5; //can use += or -= or /= or %=
    console.log(slicesOfPizza); //55 (we incremented slicesOfPizza before so 11*5)
}