
var body = document.querySelector('body');
const imagenes = document.getElementsByClassName('contenedor');
const bloqueImagen = document.getElementsByClassName('contenido-imagen');
var btnAgregarImagenElemento = document.getElementsByClassName('agregar-imagen');
const btnInfoImagenElemento = document.getElementsByClassName('detalles');
const btnEliminarImagenElemento = document.getElementsByClassName('eliminar-imagen');
const btnSubirImagen = document.getElementsByClassName('subir-imagen');

//Elementos de input y boton subir
var agregarImagenURL = document.createElement('input');
var agregarImagenDescripción = document.createElement('input');
var agregarImagenBoton = document.createElement('button');

//se agregan las clases y atributos a los elemento
agregarImagenURL.classList.add('url-imagen');
agregarImagenURL.setAttribute('placeholder','Ingrese la URL');

agregarImagenDescripción.classList.add('descripción-imagen');
agregarImagenDescripción.setAttribute('placeholder','Ingrese el titulo');

agregarImagenBoton.classList.add('subir-imagen');
agregarImagenBoton.innerText = 'SUBIR';

//Elementos de imagenes nuevas

var nuevaImagen = document.createElement('div');
var nuevaImagenTitulo = document.createElement('h3');
var nuevaImagenFondo = document.createElement('img');
var nuevaImagenBotones = document.createElement('div');
var nuevaImagenBotonEliminar = document.createElement('button');
var nuevaImagenBotonDetalles = document.createElement('button');

//se agregan las clases y atributos a los elemento de las imagenes nuevas

nuevaImagen.classList.add('contenido-imagen');

nuevaImagenTitulo.classList.add('titulo-imagen');

nuevaImagenFondo.classList.add('imagen');
nuevaImagenFondo.setAttribute('alt', 'imagen');

nuevaImagenBotones.classList.add('botones');

nuevaImagenBotonEliminar.classList.add('eliminar-imagen');
nuevaImagenBotonEliminar.innerText = 'Eliminar imagen';

nuevaImagenBotonDetalles.classList.add('detalles');
nuevaImagenBotonDetalles.innerText = 'Ver detalles';

//Se crean los elementos del modal

var modal = document.createElement('dialog');
var modalTitulo = document.createElement('h3');
var modalImagen = document.createElement('img');
var moldalBotonCerrar = document.createElement('button');


//Se agregan clases y id a los elementos del modal

modal.setAttribute('id', 'modal');

modalTitulo.classList.add('titulo-imagen');

modalImagen.classList.add('imagen-modal');

moldalBotonCerrar.classList.add('cerra-modal');

//Se agrega los inputs y un boton, que permiten agregar nuevas imagenes

for(var valor of btnAgregarImagenElemento){
    valor.addEventListener('click', (e)=>{
        body.append(agregarImagenURL);
        body.append(agregarImagenDescripción);
        body.append(agregarImagenBoton);
    });
};

//Cuando se sube la imagen se ocultan los inputs y el boton

agregarImagenBoton.addEventListener('click', (e)=>{

    var datoURL = agregarImagenURL.value;
    var datoTitulo = agregarImagenDescripción.value;

    for(var valor of imagenes){
        valor.appendChild(nuevaImagen);
        nuevaImagen.append(nuevaImagenTitulo);
        nuevaImagen.append(nuevaImagenFondo);
        nuevaImagen.append(nuevaImagenBotones);
        nuevaImagenBotones.append(nuevaImagenBotonEliminar);
        nuevaImagenBotones.append(nuevaImagenBotonDetalles);

        if(datoURL.length === 0){
            nuevaImagenFondo.setAttribute('src', 'https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg');     
        }else{
            nuevaImagenFondo.setAttribute('src', datoURL);    
        }
        
        if(datoTitulo.length === 0){
            nuevaImagenTitulo.innerText = 'Titulo de la imágen';
        }else{
            nuevaImagenTitulo.innerText = datoTitulo;
        }  
    }

    agregarImagenURL.remove();
    agregarImagenDescripción.remove();
    agregarImagenBoton.remove();
});

//Eliminar imagenes

for(var valor of btnEliminarImagenElemento){
    valor.addEventListener('click', (e)=>{
        for(var dato of bloqueImagen){
            dato.remove();
            break;
        }
    });
}

nuevaImagenBotonEliminar.addEventListener('click', (e)=>{
    nuevaImagen.remove();
});

//MODAL

for(var valor of btnInfoImagenElemento){
    valor.addEventListener("click",(e)=>{
        body.append(modal);
        modal.append(modalTitulo);
        modalTitulo.innerText = 'Inteligencias Multiples';
        modal.append(modalImagen);
        modalImagen.setAttribute('src', './imagenes/Inteligencias-Múltiples.webp');
        modal.append(moldalBotonCerrar);
        moldalBotonCerrar.innerText = 'Cerrar';
        modal.show();
    });
}

moldalBotonCerrar.addEventListener('click',(e)=>{
    modal.close();
    modal.remove();
});

nuevaImagenBotonDetalles.addEventListener('click',(e)=>{

    modal.remove();
    body.append(modal);
    modal.append(modalTitulo);
    modalTitulo.innerText= nuevaImagenTitulo.innerText;
    modal.append(modalImagen);
    modalImagen.setAttribute('src', nuevaImagenFondo.getAttribute('src'));
    modal.append(moldalBotonCerrar);
    moldalBotonCerrar.innerText = 'Cerrar';
    modal.show();
    console.log(nuevaImagenFondo.getAttribute('src'))
});