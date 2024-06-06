const barrDeProgresso = document.querySelector(".progress");
const btn_voltar = document.querySelector("#previous-btn");
const proximo_btn = document.querySelector("#next-btn")


let progress = 0;

function  atualizar(){
    barrDeProgresso.style.width = progress + "%";
    console.log(barrDeProgresso.style.width = progress + "%")
}


function nextStep() {
    progress += 20;
    if (progress > 100) progress = 100;
    atualizar()
}

function voltarPasso(){
    progress -= 20;
    if (progress < 0) progress = 0;
    atualizar()
}

proximo_btn.addEventListener("click", nextStep)
btn_voltar.addEventListener("click", voltarPasso)