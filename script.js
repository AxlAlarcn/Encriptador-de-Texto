const sinEncriptar = document.querySelector("#texto-sinEncriptar");
const textoEncriptado = document.querySelector("#texto-encriptado");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");


function encriptacion() {
    let mensajeEncriptado = sinEncriptar.value.toLowerCase();
    let encriptado = mensajeEncriptado
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    textoEncriptado.value = encriptado;
}

function textEncriptado() {

    textoEncriptado.value = "";
    let mensaje = encriptacion();
    textoEncriptado.style.backgroundImage = "none";
}



function desencriptar() {
    let mensajeDesencriptado = sinEncriptar.value;
    let encriptado = mensajeDesencriptado
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    textoEncriptado.value = encriptado;
}

function textDesencriptado() {
    textoEncriptado.value = "";
    let mensaje = desencriptar();
    textoEncriptado.style.backgroundImage = "none";
}

function cop() {
    textoEncriptado.select();
    navigator.clipboard.writeText(textoEncriptado.value);
    console.log(textoEncriptado.value);
    textoEncriptado.value = "";
}


btnCopiar.addEventListener('click', cop);
btnEncriptar.onclick = textEncriptado;
btnDesencriptar.onclick = textDesencriptado;
