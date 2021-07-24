var incrementer=1;
var counter=0;
var unit="";
document.addEventListener("DOMContentLoaded", function(){
    setInterval(increment, 10);
});

function increment(){
    counter+=incrementer;
    if(counter>1000){unit="thousand";visibleCounter=(counter/1000).toFixed(3);}
    else if(counter>1000000){"millions";visibleCounter=(counter/1000000).toFixed(3)}
    else{visibleCounter=counter}

    document.getElementById("km").innerHTML=visibleCounter +" "+ unit
}
