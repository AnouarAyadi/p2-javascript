let position = 0;
let blok = document.getElementById("blok");

function moveBlok(){
    position = position + 20;

    blok.style.left = position + "px";
    if(position >= innerWidth){
        position = 0
    }
}

setInterval(moveBlok, 100);