{
  function User(name, interests) {
    this.name = name;
    this.interests = interests;
    this.outputStuff = function () {
      //might be ideal for simple projects but in bigger projects we will be wasting memory
      console.log("My name is " + this.name, this.interests);
    };
  }

  let me = new User("Hashim", ["Football", "Fifa", "Coding"]);
  let you = new User("Camila", ["Cooking", "TV Shows"]);
  console.log(me, you);

  me.outputStuff(); //My name is Hashim (3) ['Football', 'Fifa', 'Coding']
  you.outputStuff(); //My name is Camila (2) ['Cooking', 'TV Shows']

  console.log("~~~~~~~~~");

  //Inheritance
  User.prototype.greet = function () {
    //inheritance is better to use in order to save memory (especially in big projects)
    console.log("My name is " + this.name, this.interests);
  };

  //Note: it is usually preferred to console.log outside the method
  me.greet();
  you.greet();
}
