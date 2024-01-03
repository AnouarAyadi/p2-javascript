let output = document.getElementById("output");
let input = document.getElementById("input");
let product = input.value;
let shop = [];

function add_product(){
shop.push(input.value)

output.innerText = shop
}