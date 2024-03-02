{
  document.getElementById("input").value = "!!!!"; //editted the attribute value from "stuff" to "!!!!"

  console.log(document.getElementById("input").hasAttribute("tacos")); //true - check if an attribute exists

  console.log(document.getElementById("input").attributes); //get the attributes array

  console.log(document.getElementById("input").getAttribute("tacos")); //yum - we get the value of an attribute
}
