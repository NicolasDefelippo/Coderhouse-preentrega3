console.table(productos);
let contenedorProds = document.getElementById('jscontainer');

function filtrarPorTipo(tipo) {
    const tipofiltrado = productos.filter((producto) => producto.tipo === tipo.toLowerCase());
    return tipofiltrado;
}

let tipoUsuario = parseFloat(prompt('Elegir por categoría:\n 1- Pokemon\n 2- Nickelodeon \n 3- Anime \n 4- Disney \n 5- Todas las categorias \n 0- Salir'));

while (tipoUsuario !== 0) {
    switch(tipoUsuario) {
        case 1:
            alert('Filtraste a la categoría Pokemon');
            const productosFiltradosPokemon = filtrarPorTipo("pokemon");
            console.table(productosFiltradosPokemon);
            renderizarProductos(productosFiltradosPokemon); // Mostrar productos filtrados en el HTML
            break;
        case 2:
            alert('Filtraste a la categoría Nickelodeon');
            const productosFiltradosNickelodeon = filtrarPorTipo("nickelodeon");
            console.table(productosFiltradosNickelodeon);
            renderizarProductos(productosFiltradosNickelodeon); // Mostrar productos filtrados en el HTML
            break;
        case 3:
            alert('Filtraste a la categoría Anime');
            const productosFiltradosAnime = filtrarPorTipo("anime");
            console.table(productosFiltradosAnime);
            renderizarProductos(productosFiltradosAnime); // Mostrar productos filtrados en el HTML
            break;
        case 4:
            alert('Filtraste a la categoría Disney');
            const productosFiltradosDisney = filtrarPorTipo("disney");
            console.table(productosFiltradosDisney);
            renderizarProductos(productosFiltradosDisney); // Mostrar productos filtrados en el HTML
            break;
        case 5:
            alert('Mostrando la tabla completa de productos:');
            console.table(productos);
            renderizarProductos(productos); // Mostrar todos los productos en el HTML
            break;
        default:
            alert('Mostrando la tabla completa de productos:');
            console.table(productos);
            renderizarProductos(productos); // Mostrar todos los productos en el HTML
            break;
    }

    tipoUsuario = parseFloat(prompt('Elegir por categoría:\n 1- Pokemon\n 2- Nickelodeon \n 3- Anime \n 4- Disney \n 5- Todas las categorias \n 0- Salir'));
}

//DOM
function renderizarProductos(listaProds){
    // Limpiar el contenedor antes de agregar nuevos productos
    contenedorProds.innerHTML = '';

    //cargamos las cards de los productos de la lista
    for(const producto of listaProds){
        contenedorProds.innerHTML += `
        <div class="box">
                    <div class="imgbox">
                        <img src=${producto.foto} alt="">
                    </div>
                    <h1>${producto.nombre}</h1>
                    <p>${producto.descripcion}</p>
                    <a class="my-button1" href="#"> <i class="fa-solid fa-cart-shopping"></i> $ ${producto.precio}</a>
                </div>
        `;
    }
}