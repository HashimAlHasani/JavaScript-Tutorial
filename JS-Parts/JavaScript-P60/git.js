{
  //DOM - Document Object Model

  //How we got the "ol" node that we want to use: (traverse the structure)
  //inspect element - console
  //type in console: document.childNodes press Enter
  //expand html
  //expand childNodes
  //expand body
  //expand childNodes
  //look at the index of the "ol" node
  let list = document.childNodes[1].childNodes[2].childNodes[1]; //html //body //ordered list (ol) - node

  console.log(list); //(expand) <ol>...</ol>
  console.log(list.parentElement); //(expand) <body>...</body>
  console.log(list.nextSibling.nextSibling); //(expand) <button id="clickme">Click me now!</button>
}
