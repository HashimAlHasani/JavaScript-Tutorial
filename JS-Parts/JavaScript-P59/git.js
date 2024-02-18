// - Work on CSS Essentials check stylesheet.css
{
  let myButton = document.getElementById("clickme");
  myButton.style.backgroundColor = "Red";
  myButton.style.color = "Black";

  myButton.onclick = function () {
    myButton.style.backgroundColor = "green";
    myButton.disabled = true;
  };
}
