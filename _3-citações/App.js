import {citacoes} from './citacoes.js';

const botaogerador = document.querySelector("#quote-btn");
const citacaoTexto = document.querySelector(".text");
const autorCitacao = document.querySelector(".autor");


const getCitacao = () => {
    const index = Math.floor(Math.random() * citacoes.length);

    citacaoTexto.textContent = citacoes[index].citacao
    autorCitacao.textContent = citacoes[index].autor
}


botaogerador.addEventListener("click", getCitacao);