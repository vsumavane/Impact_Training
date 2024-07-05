function saveData(){
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 10)+1;
        console.log(num);
        if(num>3){
            resolve();
        }
        else{
            reject();
        }
    });
}
saveData() 
.then(() => {
    onsole.log("succefull data 1");
    saveData();}) 
.then(() => {
    console.log("data 2 was stored");}) 
.catch(() => {c
    onsole.log("failed");});