"use strict"

const numberInput = document.querySelector(".divider__input");
const buttonFind = document.querySelector(".divider__button");
const dividerResult = document.querySelector(".result");

function findDivider() {
    var a = Number(numberInput.value);
    var dividers = [];
    dividerResult.innerHTML = `Делители числа ${a}: `;
    for (let i = 0; i <= a; i++) {
        if (a % i == 0) {
            dividers.push(i);
            dividerResult.innerHTML += `<p>${i}</p> `;
        }
    }
    //dividers.forEach(e => dividerResult.innerHTML += `${e} `);
}

buttonFind.addEventListener("click", findDivider);
