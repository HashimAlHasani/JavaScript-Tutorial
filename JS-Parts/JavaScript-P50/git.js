{
  //Constructor function - more recommended to use
  function User(name, interests) {
    //by convention constructors are declared with a capital letter
    this.name = name;
    this.interests = interests;
    //it is not always recommended to put methods in the constructor function
  }

  let me = new User("Hashim", ["Football", "Fifa", "Coding"]);
  let you = new User("Camila", ["Cooking", "TV Shows"]);

  console.log(me, you);

  me.membership = "Gold";
  console.log(me);

  console.log("~~~~~~~~~");

  //Factory Function - less recommended to use but will probably run into some Factory functions
  function newUser(name, interests) {
    //no need to prefix it with the new keyword
    let person = {
      name: name,
      interests: interests,
    };

    return person;
  }

  let me2 = newUser("Hashim", ["Football", "Fifa", "Coding"]);
  let you2 = newUser("Camila", ["Cooking", "TV Shows"]);
  console.log(me2, you2);
}
