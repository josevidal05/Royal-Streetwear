document.addEventListener("DOMContentLoaded", function () {
  // --- PRODUCTOS ---
  const productos = {
    cacao: {
      nombre: "Nike dunk low cacao",
      precio: "120,00 €",
      imagenes: [
        "../imagenes/zapatillas/cacao 1.png",
        "../imagenes/zapatillas/cacao 2.png",
        "../imagenes/zapatillas/cacao 3.png",
        "../imagenes/zapatillas/cacao 4.png",
        "../imagenes/zapatillas/cacao 5.png",
        "../imagenes/zapatillas/cacao 6.png"
      ],
      colores: [
        "../imagenes/zapatillas/cacao 1.png",
        "../imagenes/zapatillas/dunk lilas.png",
        "../imagenes/zapatillas/dunk azules.png",
        "../imagenes/zapatillas/dunk grey 1.png",
        "../imagenes/zapatillas/dunk panda.png",
        "../imagenes/zapatillas/dunk granate.png",
        "../imagenes/zapatillas/dunk verde caqui.png",
        "../imagenes/zapatillas/dunk verdes.png"
      ]
    },
    campus: {
      nombre: "Adidas Campus 00s",
      precio: "120,00 €",
      imagenes: [
        "../imagenes/zapatillas/campus.png",
        "../imagenes/zapatillas/campus 2.png"
      ],
      colores: [
        "../imagenes/zapatillas/campus.png",
        "../imagenes/zapatillas/campus 2.png"
      ]
    },
    jordan1lowgris: {
      nombre: "Air Jordan 1 Low Gris",
      precio: "140,00 €",
      imagenes: [
        "../imagenes/zapatillas/jordan 1 low gris.png",
        "../imagenes/zapatillas/jordan 1 low gris 2.png"
      ],
      colores: [
        "../imagenes/zapatillas/jordan 1 low gris.png",
        "../imagenes/zapatillas/jordan 1 low gris 2.png"
      ]
    },
    adidassamba: {
      nombre: "Samba OG",
      precio: "120,00 €",
      imagenes: [
        "../imagenes/zapatillas/samba.png",
        "../imagenes/zapatillas/samba 2.png"
      ],
      colores: [
        "../imagenes/zapatillas/samba.png",
        "../imagenes/zapatillas/samba 2.png"
      ]
    },
    nb9060negras: {
      nombre: "New Balance 9060 Negras",
      precio: "150,00 €",
      imagenes: [
        "../imagenes/zapatillas/nb 9060 negras.png",
        "../imagenes/zapatillas/nb 9060 negras 2.png"
      ],
      colores: [
        "../imagenes/zapatillas/nb 9060 negras.png",
        "../imagenes/zapatillas/nb 9060 negras 2.png"
      ]
    },
    ccpantalonnegrocarpenter: {
      nombre: "Pantalones carpenter Cold Culture",
      precio: "79,00 €",
      imagenes: [
        "../imagenes/ropa/pantalon carpenter cc negro.png",
        "../imagenes/ropa/pantalon carpenter cc negro 2.png"
      ],
      colores: [
        "../imagenes/ropa/pantalon carpenter cc negro.png",
        "../imagenes/ropa/pantalon carpenter cc negro 2.png"
      ]
    },
    npcamisetablanca: {
      nombre: "Camiseta Nude Project Blanca",
      precio: "45,00 €",
      imagenes: [
        "../imagenes/ropa/camiseta blanca np.png",
        "../imagenes/ropa/camiseta blanca np 2.png"
      ],
      colores: [
        "../imagenes/ropa/camiseta blanca np.png",
        "../imagenes/ropa/camiseta blanca np 2.png"
      ]
    },
    fgsudaderanegra: {
      nombre: "Sudadera Fake Gods Negra",
      precio: "75,00 €",
      imagenes: [
        "../imagenes/ropa/sudadera fake gods negra.png"
      ],
      colores: [
        "../imagenes/ropa/sudadera fake gods negra.png"
      ]
    },
    // Añade aquí más productos si los necesitas
  };

  // --- OBTENER PRODUCTO SELECCIONADO ---
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "cacao";
  const producto = productos[id];

  // --- MOSTRAR DATOS DEL PRODUCTO ---
  if (producto) {
    // Nombre y precio
    const nombreElem = document.querySelector(".nombre-producto");
    const precioElem = document.querySelector(".precio-producto");
    if (nombreElem) nombreElem.textContent = producto.nombre;
    if (precioElem) precioElem.textContent = producto.precio;

    // Imagen principal
    const imgPrincipal = document.querySelector("#imagenPrincipal img");
    if (imgPrincipal) imgPrincipal.src = producto.imagenes[0];

    // Miniaturas verticales y horizontales
    const vistasV = document.querySelector(".vistasV");
    const vistasH = document.querySelector(".vistasH");
    if (vistasV) vistasV.innerHTML = "";
    if (vistasH) vistasH.innerHTML = "";
    producto.imagenes.forEach((img, i) => {
      if (vistasV) vistasV.innerHTML += `<img src="${img}" class="imgS" alt="v${i + 1}" onclick="cambiarImagen('${img}')">`;
      if (vistasH) vistasH.innerHTML += `<img src="${img}" class="imgS" alt="h${i + 1}" onclick="cambiarImagen('${img}')">`;
    });

    // Colores
    const coloresDiv = document.querySelector(".colores");
    if (coloresDiv && producto.colores) {
      coloresDiv.innerHTML = "";
      producto.colores.forEach((img, i) => {
        coloresDiv.innerHTML += `<img src="${img}" alt="color${i + 1}" onclick="cambiarImagen('${img}')">`;
      });
    }
  } else {
    // Si no existe el producto
    const imgPrincipal = document.querySelector("#imagenPrincipal img");
    if (imgPrincipal) imgPrincipal.src = "";
    const nombreElem = document.querySelector(".nombre-producto");
    if (nombreElem) nombreElem.textContent = "Producto no encontrado";
    const precioElem = document.querySelector(".precio-producto");
    if (precioElem) precioElem.textContent = "";
    const vistasV = document.querySelector(".vistasV");
    if (vistasV) vistasV.innerHTML = "";
    const vistasH = document.querySelector(".vistasH");
    if (vistasH) vistasH.innerHTML = "";
    const coloresDiv = document.querySelector(".colores");
    if (coloresDiv) coloresDiv.innerHTML = "";
  }

  // --- SELECCIÓN DE TALLAS ---
  const tallas = document.querySelectorAll('.talla');
  const botonCesta = document.getElementById('carrito');
  if (tallas && botonCesta) {
    tallas.forEach((boton) => {
      boton.addEventListener('click', () => {
        tallas.forEach((btn) => btn.classList.remove('selected'));
        boton.classList.add('selected');
        botonCesta.disabled = false;
      });
    });
  }

  // --- CAMBIAR IMAGEN PRINCIPAL DESDE MINIATURAS ---
  window.cambiarImagen = function (imagen) {
    const imgPrincipal = document.querySelector(".principal");
    if (imgPrincipal) imgPrincipal.src = imagen;
  };

  // --- MARCAR MINIATURA SELECCIONADA ---
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('imgS')) {
      document.querySelectorAll('.imgS').forEach(img => img.classList.remove('selected'));
      e.target.classList.add('selected');
    }
  });
});