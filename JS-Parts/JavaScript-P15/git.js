{
    let favFood = "tacos";
    console.log(favFood.charAt(2)); //c
    console.log(favFood.concat( " are delicious")); //tacos are delicious

    let content = "Today we'll be talking about string methods and how fun they are";
    let search1 = "string";
    let search2 = "number";

    console.log(content.includes(search1)); //true
    console.log(content.includes(search2)); //false
    console.log(content.indexOf(search1)); //29
    console.log(content.indexOf(search2)); //-1
    console.log(content.lastIndexOf(search1)); //29 - finds the last index of the string "string"

    console.log(content.substring(6, 11)); //we'll - 6 is inclusive and 11 is exclusive
    console.log(content.substr(6, 11)); //we'll be ta - 6 is the inclusive start and 11 is the choosing the next 11 characters
    console.log(content.slice(6, 11)); //we'l - it works similar to substring
    console.log(content.toUpperCase()); //makes everything uppercase
    console.log(content.toLowerCase()); //makes everything lowercase
    console.log(content.trim()); //removes leading and trailing white space, even if it was a \n at the start or end of the string
    //we can use .trimLeft or .trimRight which removes either the leading or trailing white space

    let waiting = "tick tock ";
    console.log(waiting.repeat(5)); //tick tock tick tock tick tock tick tock tick tock

    console.log(content.split(" ")); //['Today', "we'll", 'be', 'talking', 'about', 'string', 'methods', 'and', 'how', 'fun', 'they', 'are']
    //split will separate the string based on a special character (single space in the eg above)

}