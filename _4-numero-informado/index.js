const Formulario = document.querySelector("form");
const resultado = document.querySelector("#resultado");

Formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    // capturando o campo do formulario - usando o id do campo
    const numeroFormulario = e.target.elements['numero'].value;
    criaElemento(numeroFormulario);
    
    
})


function criaElemento(numero){
    // criando um elemento dianmicamente
    const pResultado = document.createElement('p');

    //adcionando a classe de resultado
    pResultado.classList.add("resultado")
    
    pResultado.innerText = `Numero informado: ${numero}`
    resultado.appendChild(pResultado);
    
}