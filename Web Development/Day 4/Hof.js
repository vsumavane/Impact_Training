function check(name,marksheet){
    console.log('Hey '+name);
    marksheet();
}

check("vishal",marksheet);

function marksheet(){
    let n = Math.floor(Math.random()*10)+1
    if (n>5)
        console.log("Congrats You Have passed!");
    else
        console.log("Better Luck Next Time!");
    }