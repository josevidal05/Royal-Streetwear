
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


//CAMBIO DE LA IMAGEN PRINCIPAL DEL PRODUCTO
function cambiarImagen(imagen) {
  const imgPrincipal = document.querySelector(".principal");
  imgPrincipal.src = imagen; // Cambiar la imagen principal
}

const imgSecundarias = document.querySelectorAll(".imgS");
imgSecundarias.forEach((img) => {
  img.addEventListener("click", () => {
    // Eliminar el borde de todas las imágenes secundarias
    imgSecundarias.forEach((img) => img.classList.remove("selected"));

    // Añadir el borde a la imagen clickeada
    img.classList.add("selected");
  });
});


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


