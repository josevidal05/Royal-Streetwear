// Mostrar el banner de cookies si no se ha definido una preferencia
window.onload = function () {
    if (!document.cookie.includes("cookies_aceptadas=true") && !document.cookie.includes("cookies_rechazadas=true")) {
        document.getElementById("cookie-banner").style.display = "block";
    }
};

// Función para aceptar cookies
function aceptarCookies() {
    // Crear la cookie para recordar la aceptación
    document.cookie = "cookies_aceptadas=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
    // Ocultar el banner
    document.getElementById("cookie-banner").style.display = "none";

    // Aquí puedes habilitar cookies adicionales, como estadísticas o marketing
    habilitarCookiesEstadisticas();
    habilitarCookiesMarketing();
}

// Función para rechazar cookies
function rechazarCookies() {
    // Crear la cookie para recordar el rechazo
    document.cookie = "cookies_rechazadas=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
    // Ocultar el banner
    document.getElementById("cookie-banner").style.display = "none";

    // Aquí puedes deshabilitar cookies adicionales si es necesario
    deshabilitarCookiesEstadisticas();
    deshabilitarCookiesMarketing();
}

// Funciones para habilitar/deshabilitar cookies específicas
function habilitarCookiesEstadisticas() {
    console.log("Cookies de estadísticas habilitadas.");
    // Aquí puedes inicializar herramientas como Google Analytics
}

function habilitarCookiesMarketing() {
    console.log("Cookies de marketing habilitadas.");
    // Aquí puedes inicializar herramientas de marketing
}

function deshabilitarCookiesEstadisticas() {
    console.log("Cookies de estadísticas deshabilitadas.");
    // Aquí puedes desactivar herramientas como Google Analytics
}

function deshabilitarCookiesMarketing() {
    console.log("Cookies de marketing deshabilitadas.");
    // Aquí puedes desactivar herramientas de marketing
}