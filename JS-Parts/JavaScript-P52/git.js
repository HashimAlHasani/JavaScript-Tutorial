{
  //Inheritance is done in JS by using the prototype.
  //Prototype will prevent the duplication of a method over and over again on each object.
  //A prototype can also inherit from another prototype
  //There is a default prototype that things are going to inherit from, its called "Object.prototype"

  let x = new Object();
  let bool = Object.getPrototypeOf(x) === Object.prototype;
  console.log(bool); //true

  console.log("~~~~~~~~~");

  let user = {
    //This could be more usefull for default value
    active: true,
    sayHello: function () {
      //core functionality (reduce redundancy)
      return this.name + " says hi!";
      //when the method is invoked it will look the value of name directly on the object
      //if not found it will look on the prototype, and if it is not there it will look on the next
      //prototype, and so forth until it is undefined
    },
  };

  let student = {
    name: "student",
    major: "English",
  };

  let teacher = {
    name: "Hashim",
    teaching: ["math", "science"],
  };

  Object.setPrototypeOf(student, user); //we are setting the prototype of student to be user
  Object.setPrototypeOf(teacher, user); //we are setting the prototype of teacher to be user
  student.active = false; //Override
  console.log("teacher:", teacher.active); //true - teacher inherits properties from user
  console.log("student:", student.active); //false - since we did an override on the student object

  console.log("~~~~~~~~~");

  console.log("teacher:", teacher.sayHello()); //teacher: Hashim says hi!
  console.log("student:", student.sayHello()); //student: student says hi!
}
