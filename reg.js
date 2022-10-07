var moon = document.getElementById ("moon");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(moon.paused){
    moon.play();
    icon.src = "pause (1).png";
    }else{
        moon.pause();
        icon.src = "play-button1.png";

    }
}