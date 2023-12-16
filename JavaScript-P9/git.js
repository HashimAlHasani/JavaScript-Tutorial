{
    let x = 5;
    console.log(Number.MAX_SAFE_INTEGER); //Highest integer we can safely store: 9007199254740991
    console.log(Number.isSafeInteger(x)); //True - check if the integer we are using is safe

    let babies = 9007199254740991;
    console.log(Math.pow(babies, 200)); //infinity
    console.log(Math.pow(-babies, 201)); //-ve infinity
    console.log(console.log() + 2); //NaN - Not a Number
}