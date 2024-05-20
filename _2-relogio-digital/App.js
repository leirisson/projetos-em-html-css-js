const relogio = document.querySelector(".clock");
const horas = document.querySelector(".hours");
const minutos = document.querySelector(".minutes");
const segundos = document.querySelector(".seconds");


setInterval(atualizarRelogio, 1000);

function atualizarRelogio() {
    const dataAtual = new Date();

    const horasAtual = dataAtual.getHours().toString().padStart(2, "0");
    const minutosAtual = dataAtual.getMinutes().toString().padStart(2, "0");
    const segundoAtual = dataAtual.getSeconds().toString().padStart(2, "0");

    horas.textContent = horasAtual;
    minutos.textContent = minutosAtual;
    segundos.textContent = segundoAtual;



}

