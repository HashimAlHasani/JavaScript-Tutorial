{
  //Intro into Debugging
  function fact(x) {
    let total = x; //solution#1 - We could set total to initially equal to x
    for (let i = x - 1; i > 1; i--) {
      //solution#2 - We could also do "let i = x - 1" to fix it
      //console.log(total); //Debug
      //We can also put a breakpoint in the inspect elements/Sources
      total *= i;
    }
    return total;
  }

  console.log(fact(5)); //120 - factorial (5*4*3*2*1)

  //Event Listener Breakpoints - from inspect elements/Sources -> Event Listener Breakpoints -> Mouse -> click
  document.getElementById("lemons").onclick = () => {
    console.log("Clicked");
  };

  document.getElementById("lemons").onmouseover = () => {
    console.log("Mouse Over");
  };
}
