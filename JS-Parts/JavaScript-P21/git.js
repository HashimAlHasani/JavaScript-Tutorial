{
    //Loop examples

    //Password Guessing game
    let password;
    do {
        password = prompt("What is the password?");
    } while(password.toLowerCase() !== "let me in"); //Hard coding won't be used in real life applications

    //Go through a list
    let list = [1,3,4,6,7,5,4,2,3];

    for (let i = 0; i < list.length; i++){
        console.log(list[i]);
    }

    //Search a string
    let list2 = "Search this string c a c";
    let charToSearch = "c";

    for (let i = 0; i < list2.length; i++){
        if(list2[i] == charToSearch){
            console.log("We found the char to search!", list2[i], "is found at index", i);
            break; //if we want to only find the first occurance we can use the keyword break
        }
    }

    for(let i = 0; i < list2.length; i++){
        if(list2[i] == 'a' || list2[i] == 'e' || list2[i] == 'i' || list2[i] == 'o' || list2[i] == 'u'){
        //when we go through the string and find a vowel, the continue keyword will skip it and go to the next iteration
            continue; 
        }
        console.log(list2[i]);
        
    }
}