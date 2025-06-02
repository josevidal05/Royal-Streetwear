document.addEventListener('DOMContentLoaded', function () {
    const tallas = document.querySelectorAll('.talla');
    const botonCesta = document.getElementById('carrito');
    const carritoDropdown = document.getElementById('carrito-dropdown');
    const nombreProducto = document.querySelector('.nombre-producto');
    const imagenPrincipal = document.querySelector('.principal');
    const iconoCarrito = document.getElementById('carrito-cabecera');
    let dropdownVisible = false;

    // Selección de talla visual
    tallas.forEach(talla => {
        talla.addEventListener('click', function () {
            tallas.forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');
        });
    });


    // Mostrar/Ocultar dropdown al hacer click en el icono del carrito
    iconoCarrito.addEventListener('click', function (e) {
        e.preventDefault();
        renderizarCarrito();
        if (carritoDropdown.style.display === 'block') {
            carritoDropdown.style.display = 'none';
            dropdownVisible = false;
        } else {
            carritoDropdown.style.display = 'block';
            dropdownVisible = true;
        }
    });

    // Cerrar el dropdown si se hace click fuera
    document.addEventListener('click', function (e) {
    if (
        !iconoCarrito.parentElement.contains(e.target) &&
        !carritoDropdown.contains(e.target) &&
        e.target.id !== 'carrito'
    ) {
        carritoDropdown.style.display = 'none';
        dropdownVisible = false;
    }
});

    // Obtener producto actual
    function obtenerProductoActual() {
        const tallaSeleccionada = document.querySelector('.talla.selected');
        return {
            nombre: nombreProducto ? nombreProducto.textContent : '',
            imagen: imagenPrincipal ? imagenPrincipal.src : '',
            talla: tallaSeleccionada ? tallaSeleccionada.textContent : null
        };
    }

    // Renderizar el carrito
    function renderizarCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        if (carrito.length === 0) {
            carritoDropdown.innerHTML = '<div style="padding:10px;">El carrito está vacío</div>';
            return;
        }
        carritoDropdown.innerHTML = carrito.map((item, idx) => `
            <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid #eee;">
                <img src="${item.imagen}" alt="${item.nombre}" style="width:48px;height:48px;object-fit:cover;">
                <span style="flex:1;">${item.nombre} <br><small>Talla: ${item.talla}</small></span>
                <button data-idx="${idx}" style="background:#f44;color:#fff;border:none;padding:2px 6px;cursor:pointer;">X</button>
            </div>
        `).join('');
        // Botón para ir al carrito
        carritoDropdown.innerHTML += `
            <div style="text-align:center;padding:10px;">
                <button id="ver-carrito" style="background:#222;color:#fff;border:none;padding:6px 16px;cursor:pointer;border-radius:4px;">Ver carrito</button>
            </div>
        `;
        // Añadir eventos a los botones de eliminar
        carritoDropdown.querySelectorAll('button[data-idx]').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                eliminarDelCarrito(this.dataset.idx);
            });
        });
        // Evento para el botón "Ver carrito"
        const verCarritoBtn = document.getElementById('ver-carrito');
        if (verCarritoBtn) {
            verCarritoBtn.addEventListener('click', function () {
                window.location.href = "../carrito/index.html"; // Corrección aquí
            });
        }
    }

    // Añadir al carrito
    function añadirCarrito() {
    const producto = obtenerProductoActual();
    if (!producto.talla) {
        alert('Selecciona una talla antes de añadir al carrito.');
        return;
    }
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarCarrito();
    carritoDropdown.style.display = 'block';
    // Desmarcar la talla seleccionada después de añadir al carrito
    tallas.forEach(t => t.classList.remove('selected'));
}

    // Eliminar del carrito
    function eliminarDelCarrito(idx) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.splice(idx, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderizarCarrito();
    }

    // Evento para añadir al carrito
    botonCesta.addEventListener('click', añadirCarrito);

    // Inicializar al cargar
    renderizarCarrito();
});