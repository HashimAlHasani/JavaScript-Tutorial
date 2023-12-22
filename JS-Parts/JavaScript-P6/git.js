//let/const in here are global but not stored in window, however, 
//var is global and is stored in window.
//let y = 10;

{
    //block
    let y = 10; //Block Scoped
    const x = 20;
    {
        //nested block
        let y = 6;
        console.log(y); //6
    }

    console.log(x, y); //20 10
    console.log(y); //10
    var z = 100; //Global Scoped
}

console.log(z); //100
//console.log(x, y); //Uncaught ReferenceError: not defined