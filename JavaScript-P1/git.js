//- Manipulation, we got the button and when it is clicked we changed the innerHTML of our <p> and also the style of the button.

document.getElementById("button").onclick = function() {
     document.getElementById("confirm").innerHTML = "Order Placed. Check email for confirmation";
     document.getElementById("button").style.display = "none";
}