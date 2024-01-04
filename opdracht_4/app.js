let output = document.getElementById("verlanglijstje");

let verlanglijst = ["villa", "Audi RS7", "1 miljoen", "vakantie", "Rolex Datejust 41"]

for (let i = 0; i <verlanglijst.length; i++){
    output.innerText += verlanglijst [i] + ", ";
}