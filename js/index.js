let numero = 0;

let reset = document.getElementById('reset');
reset.addEventListener('click', resetar);

let decrement = document.getElementById('decrement')
decrement.addEventListener('click', decrementar);

let incremet = document.getElementById('increment');
incremet.addEventListener('click', incrementar);

let numberInitial = document.getElementById('number_initial');

let numberRandom = document.getElementById('randombtn');
numberRandom.addEventListener('click', btnRandom);


function resetar() {
    numero = 0;
    numberInitial.innerHTML = numero;
    console.log(numero)
}

function incrementar() {
    numero++;
    numberInitial.innerHTML = numero;
    console.log(numero)
}


function decrementar() {
    numero--;
    numberInitial.innerHTML = numero;
    console.log(numero);
}

function btnRandom() {
    numero = Math.floor(Math.random() * 1000);
    numberInitial.innerHTML = numero;
    console.log(numero)
}