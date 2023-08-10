console.table(productos);

// Filtrar productos por tipo
function filtrarPorTipo(tipo) {
    const productosFiltrados = productos.filter(producto => producto.tipo === tipo);
    renderizarProductos(productosFiltrados);
}

// HTML mostrando todos los productos
document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos(productos);
});

// Botonera
document.getElementById("pokemonBtn").addEventListener("click", () => filtrarPorTipo("pokemon"));
document.getElementById("nickelodeonBtn").addEventListener("click", () => filtrarPorTipo("nickelodeon"));
document.getElementById("animeBtn").addEventListener("click", () => filtrarPorTipo("anime"));
document.getElementById("disneyBtn").addEventListener("click", () => filtrarPorTipo("disney"));
document.getElementById("showAllBtn").addEventListener("click", () => {renderizarProductos(productos);});

// Agregar producto al carrito
function agregarAlCarrito(producto) {
    const cartItem = document.createElement("li");
    cartItem.textContent = producto.nombre + " - $" + producto.precio;
    document.getElementById("cartItems").appendChild(cartItem);
}

// Botones "Agregar al Carrito"
document.getElementById("jscontainer").addEventListener("click", event => {
    if (event.target.classList.contains("add-to-cart")) {
        const productId = parseInt(event.target.getAttribute("data-id"));
        const product = productos.find(producto => producto.id === productId);
        if (product) {
            agregarAlCarrito(product);
        }
    }
    // Contador de productos en el carrito
    actualizarContadorCarrito();
});

// Contador de productos en el carrito
function actualizarContadorCarrito() {
    const contador = document.getElementById("cartCounter");
    const cantidadProductos = document.querySelectorAll("#cartItems li").length;
    contador.textContent = cantidadProductos;
}

//DOM
function renderizarProductos(listaProds){
    const contenedorProds = document.getElementById('jscontainer');
    contenedorProds.innerHTML = '';

    for (const producto of listaProds){
        contenedorProds.innerHTML += `
        <div class="box">
            <div class="imgbox">
                <img src=${producto.foto} alt="">
            </div>
            <h1>${producto.nombre}</h1>
            <p>${producto.descripcion}</p>
            <button class="my-button1 add-to-cart" data-id="${producto.id}" href="#">
            <i class="fa-solid fa-cart-shopping"></i> $ ${producto.precio}
        </button>
        </div>`;
    }
}