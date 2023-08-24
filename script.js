let productos; // Declarar la variable productos fuera de la función fetch

// Función para cargar los datos del archivo JSON utilizando fetch y promesas
function cargarProductos() {
    return fetch('productos.JSON')
        .then(response => response.json())
        .then(data => {
            productos = data; // Asignar los datos a la variable productos
            renderizarProductos(productos); // Mostrar todos los productos al cargar la página
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

// Función para filtrar productos por tipo
function filtrarPorTipo(tipo) {
    const productosFiltrados = productos.filter(producto => producto.tipo === tipo);
    renderizarProductos(productosFiltrados);
}

// Función para agregar producto al carrito
function agregarAlCarrito(producto) {
    const cartItem = document.createElement("li");
    cartItem.textContent = producto.nombre + " - $" + producto.precio;
    document.getElementById("cartItems").appendChild(cartItem);
    actualizarContadorCarrito();
}

// Función para mostrar productos en el DOM
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

// Función para actualizar contador de productos en el carrito
function actualizarContadorCarrito() {
    const contador = document.getElementById("cartCounter");
    const cantidadProductos = document.querySelectorAll("#cartItems li").length;
    contador.textContent = cantidadProductos;
}

// Cargar productos y agregar event listeners después de que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    cargarProductos() // Cargar productos de forma asincrónica
        .then(() => {
            document.getElementById("pokemonBtn").addEventListener("click", () => filtrarPorTipo("pokemon"));
            document.getElementById("nickelodeonBtn").addEventListener("click", () => filtrarPorTipo("nickelodeon"));
            document.getElementById("animeBtn").addEventListener("click", () => filtrarPorTipo("anime"));
            document.getElementById("disneyBtn").addEventListener("click", () => filtrarPorTipo("disney"));
            document.getElementById("showAllBtn").addEventListener("click", () => renderizarProductos(productos));

            // Agregar producto al carrito
            document.getElementById("jscontainer").addEventListener("click", event => {
                if (event.target.classList.contains("add-to-cart")) {
                    const productId = parseInt(event.target.getAttribute("data-id"));
                    const product = productos.find(producto => producto.id === productId);
                    if (product) {
                        agregarAlCarrito(product);
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error al cargar productos:', error);
        });
});
