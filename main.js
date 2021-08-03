// astunta uzduotis

let rezultatas = 0;

const minusDOM = document.querySelector(".minus");
const plusDOM = document.querySelector(".plus");
const numberDOM = document.querySelector(".number");
const resetDOM = document.querySelector(".reset");

const h1ND8 = document.querySelector("h1");

function minusClick() {
    rezultatas = rezultatas - 1;
    numberDOM.innerText = rezultatas;

    h1ND8.innerText = "Žaidimas progrese";

    // galima buvo rasyti = numberDOM.innerText = --rezultatas
}

function plusCick() {
    rezultatas = rezultatas + 1;
    numberDOM.innerText = rezultatas;

    h1ND8.innerText = "Žaidimas progrese";

    // galima buvo rasyti = numberDOM.innerText = ++rezultatas
}

function resetClick() {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;

    h1ND8.innerText = "Show must go on!";
}

minusDOM.addEventListener('click', minusClick);
plusDOM.addEventListener('click', plusCick);
resetDOM.addEventListener('click', resetClick);