function convert(){
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if(toCelsuis.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "C";
    }
    else{
        result.textContent = "Select a unit.";
    }
}

const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsuis = document.getElementById("toCelsuis");
const result = document.getElementById("result");
let temp;