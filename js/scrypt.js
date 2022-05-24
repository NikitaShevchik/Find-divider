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


const numberInputOne = document.querySelector(".dividers__input_1");
const numberInputTwo = document.querySelector(".dividers__input_2");
const buttonFindDividers = document.querySelector(".dividers__button");
const dividerResultTwo = document.querySelector(".result_2");


function findDividers() {
    var first = Number(numberInputOne.value);
    var second = Number(numberInputTwo.value);
    var commonDividers = [];
    dividerResultTwo.innerHTML = `Общие делители чисел ${first} и ${second}: `;
    for (let i = 0; i <= first; i++) {
        if (first % i == 0) {
            commonDividers.push(i);
            dividerResultTwo.innerHTML += `<p>${i}</p> `;
        }
    }
}

buttonFindDividers.addEventListener("click", findDividers);