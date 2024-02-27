{
  let paragraphs = document.getElementsByTagName("p");
  let paragraph = document.getElementsByTagName("p")[0]; //Not the same as above this will directly get us the <p>...</p>

  console.log(paragraphs); //Do some expand exploration on the output - (expand) HTMLCollection [p]
  console.log(paragraph); //<p>...</p>

  console.log(paragraphs[0].childNodes[1]); //<strong> important </strong>
  //we can't change the nodeValue on an element node
  console.log((paragraphs[0].childNodes[1].nodeValue = "llamas")); //nodeValue: null

  //We can change the nodeValue on a text node
  console.log((paragraphs[0].childNodes[1].childNodes[0].nodeValue = "llamas")); //the new text will be "llamas information"
}
