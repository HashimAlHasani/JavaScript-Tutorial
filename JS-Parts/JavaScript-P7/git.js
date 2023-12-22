{
    let x = 5; //number
    let b = "10"; //string

    x = x + b;
    console.log(x); //510
}
//primitives - string/number/boolean/null/undefined/symbol - immutable
//objects - an object is a just a collection of key/value pairs

let tacos; //not defind (undefind = nothing)
let nTacos = null; //null is used when we want to explicity say that tacos has an absence of a value

let person = {
    //properties
    name: "Hashim",
    age: 22,
    favRestaurant: "Chili's",
    //method
    fun: function() {
        console.log("Yay!");
    }
}

//we can access the members of the object using the . operator 
person.fun();

//We can use some predefined objects
let now = new Date();

//arrays allow us to store multiple values (array is also an object)
let grades = [30, 30, 12, 23];
