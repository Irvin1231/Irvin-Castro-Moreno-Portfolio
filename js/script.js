const ventana = document.querySelector('.ventana-carrusel');
const contenedor = document.querySelector('.carrusel-proyecto');
const cajas = document.querySelectorAll('.proy');
const btnSiguiente = document.querySelector('.btnSiguiente');
const btnAnterior = document.querySelector('.btnAnterior');

let desplazamientoActual = 0;

function obtenerAnchoCaja() {
    return cajas[0].offsetWidth + (parseInt(getComputedStyle(cajas[0]).marginLeft) * 2);
}

function obtenerMaxDesplazamiento() {
    return Math.max(0, contenedor.scrollWidth - ventana.offsetWidth);
}

function actualizarCarrusel() {
    contenedor.style.transform = `translateX(-${desplazamientoActual}px)`;
}

btnSiguiente.addEventListener('click', () => {
    const anchoCaja = obtenerAnchoCaja();
    const maxDesplazamiento = obtenerMaxDesplazamiento();
    desplazamientoActual = Math.min(desplazamientoActual + anchoCaja, maxDesplazamiento);
    actualizarCarrusel();
});

btnAnterior.addEventListener('click', () => {
    const anchoCaja = obtenerAnchoCaja();
    desplazamientoActual = Math.max(desplazamientoActual - anchoCaja, 0);
    actualizarCarrusel();
});

// Recalcula el límite si cambia el tamaño de pantalla (ej. girar el teléfono)
window.addEventListener('resize', () => {
    const maxDesplazamiento = obtenerMaxDesplazamiento();
    if (desplazamientoActual > maxDesplazamiento) {
        desplazamientoActual = maxDesplazamiento;
        actualizarCarrusel();
    }
});