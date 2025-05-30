document.addEventListener("DOMContentLoaded", function () {
    const paginas = document.querySelectorAll('.numPaginas div a');
    const btnAnterior = document.querySelector('.paginas .anterior');
    const btnSiguiente = document.querySelector('.paginas .siguiente');
    const productos = [
        document.querySelector('.productos-pag1'),
        document.querySelector('.productos-pag2')
    ];
    let paginaActual = 0;

    function mostrarPagina(i) {
        productos.forEach((prod, idx) => {
            Array.from(prod.children).forEach(child => {
                child.style.display = (idx === i) ? 'block' : 'none';
            });
        });
        paginas.forEach((a, idx) => {
            if (idx === i) {
                a.classList.add('activo');
            } else {
                a.classList.remove('activo');
            }
        });
        paginaActual = i;
    }

    paginas.forEach((pagina, i) => {
        pagina.addEventListener('click', function (e) {
            e.preventDefault();
            mostrarPagina(i);
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    if (btnSiguiente) {
        btnSiguiente.addEventListener('click', function (e) {
            e.preventDefault();
            if (paginaActual < productos.length - 1) {
                mostrarPagina(paginaActual + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    }

    if (btnAnterior) {
        btnAnterior.addEventListener('click', function (e) {
            e.preventDefault();
            if (paginaActual > 0) {
                mostrarPagina(paginaActual - 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    }

    // Mostrar solo la primera página al cargar
    mostrarPagina(0);
});