let count = 0;
const add = document.getElementById("add");
const amount = document.getElementById("amount");

add.onclick = function(){
    count++;
    amount.textContent = count;
};