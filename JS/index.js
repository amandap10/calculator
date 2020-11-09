//Capturar os elementos dos inputs 1 e 2 

let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let result = document.getElementById('result');

//Capturar as operações 

const mais = document.getElementById('soma');
const menos = document.getElementById('sub');
const divi = document.getElementById('divisao');
const mult = document.getElementById('mult');
const clear = document.getElementById('clear');

mais.addEventListener('click', () => {
    result.value = Number(numero1.value) + Number(numero2.value);         
});

menos.addEventListener('click', () => {
    result.value = Number(numero1.value) - Number(numero2.value);
});

divi.addEventListener('click', () => {
    result.value = Number(numero1.value) / Number(numero2.value);
});

mult.addEventListener('click', () => {
    result.value = Number(numero1.value) * Number(numero2.value);
});

clear.addEventListener('click', () => {
    numero1.value = '' ;
    numero2.value = '' ;
    result.value = '' ;
});