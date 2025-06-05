document.addEventListener("DOMContentLoaded", function () {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const tabla = document.querySelector("table");
    tabla.querySelectorAll("tr.producto").forEach(tr => tr.remove());

    let totalCantidad = 0;
    let totalPrecio = 0;
    const totalRow = tabla.querySelector("td.total")?.parentElement;

    // Agrupa productos por nombre + talla
    const agrupados = {};
    carrito.forEach(item => {
        const key = item.nombre + '|' + (item.talla || '');
        if (!agrupados[key]) {
            agrupados[key] = { ...item, cantidad: 1 };
        } else {
            agrupados[key].cantidad += 1;
        }
    });

    Object.values(agrupados).forEach((item, idx) => {
        let precioUnitario = 0;
        if (item.precio) {
            precioUnitario = parseFloat(item.precio.replace(/[^\d,]/g, '').replace(',', '.'));
        }
        const tr = document.createElement("tr");
        tr.className = "producto";
        tr.innerHTML = `
            <td class="foto">
                <a href="../Producto/index.html?id=${encodeURIComponent(item.nombre)}">
                    <img src="${item.imagen}" alt="${item.nombre}">
                </a>
            </td>
            <td class="info">
                <a href="../Producto/index.html?id=${encodeURIComponent(item.nombre)}">
                    <p>${item.nombre}</p>
                    <p>${item.precio || ""}</p>
                    <p>${item.talla ? "Talla: " + item.talla : ""}</p>
                </a>
            </td>
            <td class="cantidad">${item.cantidad}</td>
            <td class="precio">${(precioUnitario * item.cantidad).toFixed(2)}€</td>
            <td><button class="eliminar-producto" data-key="${item.nombre}|${item.talla}">X</button></td>
        `;
        if (totalRow && totalRow.parentNode === tabla) {
            tabla.insertBefore(tr, totalRow);
        } else if (totalRow) {
            totalRow.parentNode.insertBefore(tr, totalRow);
        } else {
            tabla.appendChild(tr);
        }
        totalCantidad += item.cantidad;
        totalPrecio += precioUnitario * item.cantidad;
    });

    // Evento para eliminar producto
    tabla.querySelectorAll('.eliminar-producto').forEach(btn => {
        btn.addEventListener('click', function () {
            const key = this.dataset.key;
            // Filtra el carrito para eliminar todos los productos con ese nombre y talla
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const [nombre, talla] = key.split('|');
            carrito = carrito.filter(item => !(item.nombre === nombre && item.talla === talla));
            localStorage.setItem('carrito', JSON.stringify(carrito));
            location.reload(); // Recarga la página para actualizar la tabla
        });
    });

    // Actualizar totales
    const tdCantidadTotal = tabla.querySelector(".cantidad_total");
    const tdPrecioTotal = tabla.querySelector(".precio_total");
    if (tdCantidadTotal) tdCantidadTotal.textContent = totalCantidad;
    if (tdPrecioTotal) tdPrecioTotal.textContent = totalPrecio.toFixed(2) + "€";
});