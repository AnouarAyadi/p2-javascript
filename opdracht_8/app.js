let blok = document.getElementById("blok")
let position = 0
let vertical = 0

window.addEventListener("keydown", function(e){

    if(e.key == "a"){
        console.log(e.key);
        position -= 10
        blok.style.left = position + "px"
        
    }
    
    if(e.key == "w"){
        console.log(e.key);
        vertical -= 10
        blok.style.top = vertical + "px"
    }
    
    if(e.key == "s"){
        console.log(e.key);
        vertical += 10
        blok.style.top = vertical + "px"
    }
    
    if(e.key == "d"){
        console.log(e.key);
        position += 10
        blok.style.left = position + "px"
    }
    
    if(e.key == "ArrowRight"){
        console.log(e.key);
        position += 10
        blok.style.left = position + "px"
    }
    
    if (e.key == "ArrowUp"){
        console.log(e.key);
        vertical -= 10
        blok.style.top = vertical + "px"
    }
    
    if (e.key == "ArrowDown"){
        console.log(e.key);
        vertical += 10
        blok.style.top = vertical + "px"
    }

    if (e.key == "ArrowLeft"){
        console.log(e.key);
        position -= 10
        blok.style.left = position + "px"
    }
})
