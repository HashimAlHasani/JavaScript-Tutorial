{
    let position = {
        x: 10,
        y: 20,
        print: function() {
            //the this keyword is very important, in here if we want to access/reach the x perimeter in this object we use it like below:
            console.log(`X: ${this.x}, Y: ${this.y}`);
        },
        nestedObject: {
            sweetproperty: "Hello Friends"
        }
    }

    function print() {
        //the this keyword is very important, in here if we want to access/reach the x perimeter in this object we use it like below:
        console.log(`X: ${this.x}, Y: ${this.y}`);
    }

    //when we make an instance of an object, and change on that instance it will reflect the same changes on the main object
    //unlike primitives which only creates an independant instance
    let myPosition = position;

    console.log(position); //{x: 10, y: 20}
    console.log(myPosition); //{x: 10, y: 20}

    myPosition.x = 15;

    console.log(position); //{x: 15, y: 20}
    console.log(myPosition); //{x: 15, y: 20}

    position.print(); //X: 15, Y: 20
    print(); //X: undefined, Y: undefined - this is because of the "this" keyword as 
    //there is no x in the scope it is looking at (window in here)
    
    console.log(this); //window 

    //position.nestedObject.sweetproperty - this is how we traverse nested objects

    //Important Note:
    //JSON is javascript object notation
    //it is similar to what we are using but there are some small differences (we can look it up on google)
    //when we are working with websites through an API we'll often use JSON
    //we'll also use it for configuration for different frameworks
}