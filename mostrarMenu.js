function mostrarMenu() {
    const desplegable = document.getElementById("desplegable");
    if (desplegable.classList.contains("visible")) {
        desplegable.classList.remove("visible");
        setTimeout(() => desplegable.classList.add("oculto"), 300); // Esperar animación
    } else {
        desplegable.classList.remove("oculto");
        setTimeout(() => desplegable.classList.add("visible"), 10); // Permitir que el CSS haga la transición
    }
}
