{
  let list = document.getElementsByTagName("ol");
  console.log(list); //(expand) HTMLCollection

  let ourList = list[0];
  console.log(ourList); //<ol>...</ol>

  ourList.onmouseover = function () {
    console.log("mouse over");

    //ourList.childNodes[1].childNodes[0].nodeValue = "House"; //Change "1. Home" to "2. House"

    //This way is better and easier to use
    document.getElementById("home").innerHTML = "House"; //Change "1. Home" to "2. House"
  };

  let button = document.getElementById("clickme");
  button.onmouseenter = function () {
    button.innerHTML = "revealed";
  };

  button.onmouseleave = function () {
    button.innerHTML = "Hover over me!";
    //ourList.remove();
  };
}
