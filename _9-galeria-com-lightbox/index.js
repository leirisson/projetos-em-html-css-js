const itensDaGalarya = document.querySelectorAll(".galery-item");
const lightBox = document.querySelector(".lightbox");
const lightBoxImagem = document.querySelector(".lightbox-img");
const lightBoxClose = document.querySelector('.lightbox-close');

itensDaGalarya.forEach((item) => {
    item.addEventListener("click", () => {
        
        const imgUrl = item.querySelector(".galery-img").getAttribute("data-src");
         lightBoxImagem.setAttribute("src", imgUrl);
         lightBox.style.display = "flex";
    });
})


lightBoxClose.addEventListener("click", () => {
    lightBox.style.display = "none";
})