const agregarCarrito = document.querySelector('button')
const verCarrito = document.querySelector('span')

let contador = 0
agregarCarrito.addEventListener('click', function () {
    contador++
    verCarrito.textContent = contador

    localStorage.setItem('carrito', contador)
})

const carritoGuardado = localStorage.getItem('carrito')
if (carritoGuardado) {
    contador = parseInt(carritoGuardado)
    verCarrito.textContent = contador
}
