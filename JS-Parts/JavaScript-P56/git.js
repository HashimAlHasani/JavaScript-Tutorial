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

  let newMembers = [teacher, student];

  newMembers.forEach(function (e) {
    console.log(e.sayHello());
  });

  let properties = [];

  for (let prop in teacher) {
    //This will iterate through all properties in teacher with the entire prototype
    if (teacher.hasOwnProperty(prop)) {
      //This will only check the properties in teacher object alone
      properties.push(prop); //['name', 'teaching', 'sayHello']
    }
  }
}
