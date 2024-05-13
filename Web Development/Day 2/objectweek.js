let days = {1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7:"Sunday"};

function getDay(num){
    if(num < 8 && num > 0){
        console.log(days[num]);
    } else {
        console.log("Invalid day");
    }
}

getDay(10);
