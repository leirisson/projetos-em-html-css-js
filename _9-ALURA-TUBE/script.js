const conatinerVideos = document.querySelector(".videos__container");
const barraDePesquisa = document.querySelector(".pesquisar__input");
const tagsDeCategoria = document.querySelectorAll(".superior__item");


const url = 'http://localhost:3000/videos';


async function BuscarDadosNaAPI() {

    const dadosConvertidos = await fetch(url)
        .then(async resolve => {
            const dados = await resolve.json()
            return dados
        })
        .catch(error => {
            console.error("Deu error ao consultar API => ", error)
        })


    return dadosConvertidos
}


BuscarDadosNaAPI()
    .then(dadosAPI => {
        dadosAPI.forEach(infVideos => {
            criarElemento(infVideos)
        });
    })
    .catch(error => {
        conatinerVideos.innerHTML = `
    <p>Houve um error ao carregar ao os videos ${error}}</p>
    `
    })


barraDePesquisa.addEventListener('input', filtrarPesquisa);


// adcionando filtro com a barra de pesquisa
function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item")
    if (barraDePesquisa != "") {
        for (let video of videos) {
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase()
            let valorFiltro = barraDePesquisa.value.toLowerCase()
            if (!titulo.includes(valorFiltro)) {
                video.style.display = 'none'
            } else {
                video.style.display = 'block'
            }
        }
    } else {
        videos.style.display = 'block'
    }
}


// filtro com as tags de categoria 
tagsDeCategoria.forEach(tags => {
    let nomeCategoria = tags.getAttribute("name")
    tags.addEventListener("click", () => {
        // chamando a função para fazer a filtragem por tags de categoria
        filtraPorCategoria(nomeCategoria)
    })
})


function filtraPorCategoria(categoria) {
    const videos = document.querySelectorAll(".videos__item");
    for (let video of videos) {

        let categoriaDoVideo = video.querySelector(".categoria").textContent.toLowerCase()
        let valorFiltro = categoria.toLowerCase();

        if (!categoriaDoVideo.includes(valorFiltro) && valorFiltro != 'tudo') {
            video.style.display = 'none'
        } else {
            video.style.display = "block"
        }
    }
}



function criarElemento(dadosDosVideos) {
    const liVideo = document.createElement('li')
    liVideo.className = "videos__item"
    liVideo.innerHTML += `
    <iframe src="${dadosDosVideos.url}" title="${dadosDosVideos.titulo}" frameborder="0" allowfullscreen></iframe>
    <div class="descricao-video">
        <img class="img-canal" src="${dadosDosVideos.imagem}" alt="logo do canal" >
        <h3 class="titulo-video">${dadosDosVideos.titulo}</h3>
        <p>${dadosDosVideos.descricao}</p>
        <p class="categoria" hidden> ${dadosDosVideos.categoria}</p>        
    </div>
    `
    conatinerVideos.appendChild(liVideo)

    return conatinerVideos;
}