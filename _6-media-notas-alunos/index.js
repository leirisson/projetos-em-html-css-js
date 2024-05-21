const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const n1 = e.target.elements['prova1'].value;
    const n2 = e.target.elements['prova2'].value;
    const n3 = e.target.elements['prova3'].value;
    const n4 = e.target.elements['prova4'].value;

    const nota1 = Number(n1);
    const nota2 = Number(n2);
    const nota3 = Number(n3);
    const nota4 = Number(n4);

    createElement(nota1, nota2, nota3, nota4);
  
 });


 function createElement(nota1, nota2, nota3, nota4){
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    const pResult = document.createElement('p');
    if(media < 6){
        pResult.classList.add('reprovado')
        pResult.textContent = `reprovado, Média${media}`
    } else{
        pResult.classList.add('aprovado');
        pResult.textContent = `aprovado, Média: ${media}`
    }

    resultado.appendChild(pResult);
 }