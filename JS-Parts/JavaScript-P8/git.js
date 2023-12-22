{
    let myName = "Hashim";
    //myName.toUpperCase(); this would not work as primitives are immutable
    myName = myName.toUpperCase();
    console.log(myName);

    //To convert primitive to an object we use:
    let prim = new String("Object");
    //or
    let primN = new Number();

    //To convert object to a primitive we use:
    prim.valueOf("primitive");

    //mostly you`ll use the primitive version only, no need to objectify it
}