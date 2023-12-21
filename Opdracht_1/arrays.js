let winkelmand = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];


let groottewinkelmand = winkelmand.length;


document.getElementById("aantalproducten").innerText = "Er zitten " + groottewinkelmand + " producten in uw winkelmand";


document.getElementById("toonproducten").innerText = "Uw producten zijn: " + winkelmand;


let vierdeproduct = winkelmand[3];


document.getElementById("productvier").innerText = vierdeproduct + ", staat op de vierde plek in uw winkelmand";

let winkelmandaangepast = winkelmand[1] = "Bier";


document.getElementById("veranderen").innerText = winkelmand


function product_toevoegen() {      
    winkelmand.push("Mandarijn");
    document.getElementById("veranderen").innerText = winkelmand;
}

if (groottewinkelmand > [1]) { document.getElementById("meerdaneen").innerText = winkelmand ;
    
} else { document.getElementById("meerdaneen").innerText = "U heeft niet genoeg producten om te tonen";
}

if (winkelmand[4] == "Drop") { document.getElementById("dropje").innerText = winkelmand;
    
} else { document.getElementById("dropje").innerText = "U heeft geen drop";
    
}

document.getElementById("jason").innerText = winkelmand

document.getElementById("dropje").innerText = winkelmand.join(" ");
winkelmand.splice(0,2)

document.getElementById("dropje").innerText = winkelmand

winkelmand.sort();
document.getElementById("imrane").innerText = winkelmand

