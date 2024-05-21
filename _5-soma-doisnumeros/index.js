// capturando valores 

const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");


formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor1 = e.target.elements['numero1'].value;
    const valor2 = e.target.elements['numero2'].value;

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    criaElementoResultado(numero1, numero2);
})


function criaElementoResultado(numero1, numero2){
    
    const soma = numero1 + numero2;
    
    // criando elemento p
    const pResultado = document.createElement('p');

    // adcionando uma classe ao elemento p
    pResultado.classList.add('resultado');

    
    pResultado.textContent = `A soma dos valores é: ${soma}`;

    resultado.appendChild(pResultado);
}

