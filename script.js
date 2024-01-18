function indice() {
    var preguntaRespuesta = document.querySelectorAll('.pregunta_icono'); // Agrega el punto para seleccionar la clase
    var elementoClicado = event.currentTarget; // Obtén el elemento clicado

    var indice = Array.from(preguntaRespuesta).indexOf(elementoClicado);
    return indice;
}
 
 function mostrarInformacion() {
    var indiceElemento = indice();
     var respuestas = document.getElementsByClassName('respuestas')[indiceElemento]; 
    var iconoPositivo = document.getElementsByClassName('positivo')[indiceElemento];
     respuestas.style.display = (respuestas.style.display === 'none') ? 'block' : 'none';
     iconoPositivo.src = (respuestas.style.display === 'none')?'recursos/icon-plus.svg': 'recursos/icon-minus.svg'
 }  
