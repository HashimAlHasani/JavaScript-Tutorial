{
  let button = document.getElementById("clickme");

  button.onclick = function () {
    let node = document.createElement("li");
    console.log(node); //<li></li>

    node.appendChild(
      document.createTextNode(document.getElementById("input").value)
    );

    let list = document.getElementById("items");

    list.appendChild(node);
  };
}
