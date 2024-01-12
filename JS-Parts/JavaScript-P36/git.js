//Functions are known as first class citizens/objects; you can treat functions as if it's any other object
//So we can create a function (this is the bigger function) that take in a function as an argument, the bigger
//function in this situation is known as a higher order function
function doSomething(x) {
  //this is the higher order function
  return x();
}

let myFunc = () => 5 * 5; //this is an arrow function

let result = doSomething(myFunc); //here we do not use the (), so not myFunc()
console.log(result);

let doSomeT = function () {
  console.log("Done");
};

setTimeout(doSomeT, 2000);
//what this higher order function (setTimeout), is it will invoke the doSomeT function after 2000ms (2s) have passed,
//but the thing here is that it is asynchronous, so it will continue in our code, and after 2 seconds have passed it will break,
//and go back and execute the doSomeT
//Asynchronous basically means that the code will not wait for it until it works but will continue then when its time
//it will go back to it and do its job
console.log(
  "This will be printed before the string 'Done', wait 2 seconds for 'Done' to be printed"
);

//AJAX - Asynchronous JavaScript and XML
//If we want a page to load without doing a page refresh we can load that data asynchronously
