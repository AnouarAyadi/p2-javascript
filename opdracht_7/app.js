let button = document.getElementById("blok")
let colors = ["red", "blue", "green", "purple", "yellow"];



button.addEventListener("click", function(){
    let random_Getal = Math.floor(Math.random()*5)
    button.style.backgroundColor = colors[random_Getal];
})