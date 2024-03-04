import { barcelona, roma, paris, londres} from './ciudades.js'

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

console.log(enlaces)
enlaces.forEach(function (enlace){
    enlace.addEventListener('click', function (){
        // remover activo    
        enlaces.forEach(function (enlace){
            enlace.classList.remove('active');
        });
        // agregar la clase "active" al enlace actual
        this.classList.add('active')
        // obtenerel contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});

//funcion para traer la inf correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París': paris,
        'Londres' : londres
    };
    return contenido[enlace];
}