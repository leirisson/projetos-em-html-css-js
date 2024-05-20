// selecionar os elentos

const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");


// função para converter as unidades
function converter() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if (fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
    }
    // converter a entrada para metros
    let metters;
    switch (fromValue) {
        case "m":
            metters = inputElement.value;
            break;
        case "km":
            metters = inputElement.value * 1000;
            break;
        case "cm":
            metters = inputElement.value / 100;
            break;
        case "mm":
            metters = inputElement.value / 1000;
            break;
    }

    // converter metros para unidade de saida

    let result;
    switch (toValue) {
        case "m":
            result = metters;
            break;
        case "km":
            result = metters / 1000;
            break;
        case "cm":
            result = metters * 100;
            break;
        case "mm":
            result = metters * 1000;
            break;
    }

    //exibindo resultado no input
    outputElement.value = result;

    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text

    const message = `${inputElement.value} ${fromLabel} equivale a ${result} ${toLabel}`

    messageElement.textContent = message;
}

convertButton.addEventListener("click", converter);