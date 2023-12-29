{
    let d = document.getElementById("destination");

    for(let i = 0; i < 10; i++){
        for (let k = i; k >= 0; k--){
            //console.log(`i: ${i}, k: ${k}`);
            d.append(k + " ");
        }
        var br = document.createElement('br');
        d.appendChild(br);
    }  

    // The output:
    // 0
    // 1 0
    // 2 1 0
    // 3 2 1 0
    // 4 3 2 1 0
    // 5 4 3 2 1 0
    // 6 5 4 3 2 1 0
    // 7 6 5 4 3 2 1 0
    // 8 7 6 5 4 3 2 1 0
    // 9 8 7 6 5 4 3 2 1 0
}