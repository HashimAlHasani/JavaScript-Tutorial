{
    //while
    //do while - it will always be executed at least once so even if the condition is not met it will do at least 1 loop
    //for loop

    //initialization - I
    //condition - C
    //update - U

    let i = 0; //I
    while(i < 10) { //C
        console.log(`i: ${i}`);
        i++; //U
    }

    let y = 0; //I
    do {
        console.log(`y: ${y}`);
        y++; //U
    } while(y < 10); //C

    //      I      C       U
    for(let x = 0; x < 10; x++){
        console.log(`x: ${x}`);
    }
}