const tallas = document.querySelectorAll('.talla');
const botonCesta = document.getElementById('carrito');

// Añadir un evento a cada botón de talla
tallas.forEach((boton) => {
  boton.addEventListener('click', () => {
    // Eliminar la clase "selected" de todos los botones
    tallas.forEach((btn) => {
      btn.classList.remove('selected');
    });

    // Añadir la clase "selected" al botón que fue clickeado
    boton.classList.add('selected');

    // Habilitar el botón de "Añadir a la cesta"
    botonCesta.disabled = false;
  });
});

function cambiarImagen(imagen) {
  const imgPrincipal = document.querySelector(".principal");
  imgPrincipal.src = imagen; // Cambiar la imagen principal
}


/* cambio de la imagen principal del producto por las imagenes de las vistas */
/*const imgP = document.getElementsByClassName("imagenPrincipal");
const vistas = document.querySelectorAll(".i2");
vistas.addEventListener("mouseover", cambiarImagen)

function cambiarImagen(){
    document.querySelector(".imagenPrincipal img")[0].style.display = "none";
}
*/

/*despliegue del menu de la hamburguesa *//*
const burguer = document.getElementById("hamburguesa");
const botones = document.getElementById("botones");
burguer.addEventListener("mouseover", despliega);
burguer.addEventListener("mouseout", nodespliega);
function despliega(){
    burguer.style.color = "gray";
    botones.style.display = "block"
}
function nodespliega() {
    burguer.style.color = "initial";
    botones.style.display = "none"
}*/


/* funcion para que la talla en la que se clique se quede marcada */
const talla1 = document.getElementById("t1");
talla1.addEventListener("click", marcarTalla);
function marcarTalla(e){
    talla1.style.fontWeight="bold";
    talla1.style.backgroundColor = "lightgrey";
}

