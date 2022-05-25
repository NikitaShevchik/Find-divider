"use strict"
/*------------------DEVIDERS--------------------*/
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
/*------------------COMMON DEVIDERS--------------------*/
const numberInputOne = document.querySelector(".dividers__input_1");
const numberInputTwo = document.querySelector(".dividers__input_2");
const buttonFindDividers = document.querySelector(".dividers__button");
const dividerResultTwo = document.querySelector(".result_2");

function findDividers() {
    var first = Number(numberInputOne.value);
    var second = Number(numberInputTwo.value);
    var firstDivider = [];
    var secondDivider = [];
    var commonDividers = [];
    dividerResultTwo.innerHTML = `Общие делители чисел ${first} и ${second}: `;
    for (let i = 0; i <= first; i++) {
        if (first % i == 0) {
            firstDivider.push(i);
        }
    }
    for (let j = 0; j <= second; j++) {
        if (second % j == 0) {
            secondDivider.push(j);
        }
    }
    if (firstDivider.length >= secondDivider.length) {
        for (let k = 0; k <= secondDivider.length; k++) {
            if (first % secondDivider[k] == 0) {
                commonDividers.push(secondDivider[k]);
                dividerResultTwo.innerHTML += `<p>${secondDivider[k]}</p> `;
            }
        }
    } else if (firstDivider.length < secondDivider.length) {
        for (let k = 0; k <= firstDivider.length; k++) {
            if (second % firstDivider[k] == 0) {
                commonDividers.push(firstDivider[k]);
                dividerResultTwo.innerHTML += `<p>${firstDivider[k]}</p> `;
            }
        }
    }
}
buttonFindDividers.addEventListener("click", findDividers);