const inputMensaje = document.querySelector ("#mensaje");
const inputResultado = document.querySelector ("#resultado");
const btnEncriptar = document.querySelector ("#encriptar");
const btnDesencriptar = document.querySelector ("#desencriptar");
const btnCopiar = document.querySelector ("#copiar");

var muneico=document.querySelector(".muneco")
var text1=document.querySelector(".texto1")
var text2=document.querySelector(".texto2")

function validarmensaje(){
    var mensaje = inputMensaje.value;
    let letrasvalidas ="abcdefghijklmnopqrstuvwxyz";
    let mensajedeerror= document.createDocumentFragment();
    for (let letra of mensaje){
        if (!letrasvalidas.includes(letra)){
            let p = document.createElement("p");
            p.setAttribute("class","error");
            p.textContent="la letra $letra no es valida";
            mensajeError.appendchild(p);
        }
    }
    seccion1.appendchild(mensajedeerror);
    if (mensajedeerror.children.length === 0){
        return true;
    }
        return false;
}



function encriptar(){  
    ocultaradelante()
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replace("e","enter")
    .replace("i","imes")
    .replace("a","ai")
    .replace("o","ober")
    .replace("u","ufat");
    inputResultado.value = mensaje;
}

function desencriptar(){
    ocultaradelante()
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replace("enter","e")
    .replace("imes","i")
    .replace("ai","a")
    .replace("ober","o")
    .replace("ufat","u");
    inputResultado.value = mensaje;
}

function ocultaradelante(){
    muneico.classList.add("ocultar");
    text1.classList.add("ocultar");
    text2.classList.add("ocultar");
}

function copiar(){
    var mensajeEncriptado =inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
}



btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;