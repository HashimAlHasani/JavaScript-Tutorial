{
  let user = {
    active: false,
    sayHello: function () {
      return this.name + " says hi!";
    },
  };

  let student = {
    name: "student",
    major: "English",
  };

  let teacher = {
    name: "Hashim",
    teaching: ["math", "science"],
    sayHello: function () {
      let message = this.name + " teaches ";
      this.teaching.forEach(function (e) {
        message += e + " ";
      });
      return message;
    },
  };

  Object.setPrototypeOf(student, user);
  Object.setPrototypeOf(teacher, user);

  student.active = true;

  let newMembers = [teacher, student]; //We can treat them as if they are of the same type (type user) - Polymorphism

  newMembers.forEach(function (e) {
    console.log(e.sayHello()); //Hashim teaches math science - student says hi!
  });

  console.log("Name in teacher? ", "name" in teacher); //Name in teacher? true - Check an Object for a property using in
  console.log("Active in teacher? ", "active" in teacher); //Active in teacher? true
  console.log("Name in teacher? ", teacher.name !== undefined); //Name in teacher? true - Another way to check ^^^
  console.log("Active in teacher? ", teacher.active !== undefined); //Active in teacher? true

  //hasOwnProperty will only check directly on the object and will not check the prototype
  console.log("Name in teacher? ", teacher.hasOwnProperty("name")); //Name in teacher? true
  console.log("Active in teacher? ", teacher.hasOwnProperty("active")); //Active in teacher? false
}
