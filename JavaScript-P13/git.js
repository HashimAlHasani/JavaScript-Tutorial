{
    //Number is a constructor, a constructor is just a function, and in js functions are just actually objects
    //because it is an object it allows us to put properties on this object
    let y = new Number();
    let x = 5; 
    //we can call methods using directly on number or instances
    console.log(x.toExponential(5)); //5.00000e+0
    let money = 5.5959595;
    console.log("$" + money.toFixed(2)); //$5.60
    let money2 = 55959595;
    console.log("$" + money2.toLocaleString()); //$55,959,595
    console.log("$" + money2.toPrecision(2)); //$5.6e+7
    let money3 = new Number(55959595);
    console.log(typeof(money3.valueOf())); //number
    console.log(typeof(money3)); //object

    //Using the Math object
    var abs = Math.abs(-36); //36
    var goUp = Math.ceil(.00000001); //1
    var goDown = Math.floor(.99999); //0
    var powerUp = Math.pow(3,2); //9
    var roundUp = Math.round(4.9); //5
    var roundDown = Math.round(5.1); // 5
    var isPositive = Math.sign(-Infinity); //-1 (false)
    var getInt = Math.trunc(4.99999); //4
}