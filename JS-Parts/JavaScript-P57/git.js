{
  //Converting Object Literals to Constructors (We converted object literals in #56 to Constructors in #57)
  function User() {
    this.active = false;
  }

  User.prototype.sayHello = function () {
    return this.name + " says hi!";
  };

  function Student(name, major) {
    this.name = name;
    this.major = major;
  }

  function Teacher(name, teaching) {
    this.name = name;
    this.teaching = teaching;
  }

  Student.prototype = new User(); //We set the prototype of the Student constructor to the User constructor
  Teacher.prototype = new User(); //We set the prototype of the Teacher constructor to the User constructor

  Teacher.prototype.sayHello = function () {
    //Override
    return "Teacher says hi!";
  };

  let student = new Student("student", "English");
  let teacher = new Teacher("Hashim", ["math", "science"]);

  console.log(student, teacher);

  //the instanceof operator is used to check whether an object is an instance of a particular class or constructor.
  console.log(teacher instanceof Teacher); //true
  console.log(teacher instanceof User); //true - since Teacher inherits from User

  if (teacher instanceof Student) {
    //false
    console.log("yup");
  } else {
    console.log("nope");
  }

  function doSomething(user) {
    if (user instanceof User) {
      return 5;
    }
    return -1;
  }

  console.log(doSomething(teacher)); //5 - valid user
  console.log(doSomething("teacher")); //-1 - invalid user
}
