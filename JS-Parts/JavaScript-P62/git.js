{
  //Node.ELEMENT_Node: (value/nodeType: 1) An Element node like <p> or <div>
  //Node.TEXT_NODE: (value/nodeType: 3) The actual Text inside an Element or Attr

  let list = document.getElementsByTagName("li");

  console.log(list[0]); //(expand) <li class="border">...</li>
  console.log(list[0].childNodes); //NodeList [text]
  console.log(list[0].childNodes[0]); //"Home"

  console.log(list[0].nodeType); //1
  console.log(list[0].childNodes[0].nodeType); //3

  console.log(list[0].nodeName); //LI
  console.log(list[0].childNodes[0].nodeName); //#text

  if (list[0].nodeType === 1) {
    //We`ll get element
    console.log("element");
  } else if (list[0].nodeType === 3) {
    console.log("text");
  }

  if (list[0].childNodes[0].nodeType === 1) {
    //We`ll get text
    console.log("element");
  } else if (list[0].childNodes[0].nodeType === 3) {
    console.log("text");
  }
}
