let numero = 0;

const reset = document.querySelector('.button_effect');
reset.addEventListener('click', resetar);

const decrement = document.querySelector('.buttons');
decrement.addEventListener('click', decrementar);

const incremet = document.querySelectorAll('.buttons')[1];
incremet.addEventListener('click', incrementar);

const numberInitial = document.querySelector('.number_first');

const numberRandom = document.querySelectorAll('.button_effect')[1];
numberRandom.addEventListener('click', btnRandom);


function resetar() {
    numero = 0;
    numberInitial.textContent = numero;
    console.log(numero)
}

function incrementar() {
    numero++;
    numberInitial.textContent = numero;
    console.log(numero)
}

function decrementar() {
    numero--;
    numberInitial.textContent = numero;
    console.log(numero);
}

function btnRandom() {
    numero = Math.floor(Math.random() * 100);
    numberInitial.textContent = numero;
    console.log(numero)
}