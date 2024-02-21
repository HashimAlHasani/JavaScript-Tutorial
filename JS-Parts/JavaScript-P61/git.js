{
  let list = document.getElementsByTagName("li");

  console.log(list); //HTMLCollection(3) - 0: li.border / 1: li / 2: li#special.border

  let list2 = document.getElementsByClassName("border");

  console.log(list2); //HTMLCollection(2) - 0: li.border / 1: li#special.border
}
