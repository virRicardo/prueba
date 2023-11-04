const contenedorTarjetas = document.getElementById("productos-container");


function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
        const nuevaVela = document.createElement("div");
        nuevaVela.classList = "tarjeta-producto";
        nuevaVela.innerHTML = `
        <img src="./img/vela${producto.id}.jpg">
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        <button>Agregar al carrito</button>
        `;
    
        contenedorTarjetas.appendChild(nuevaVela);
        nuevaVela.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto));
    });
}

crearTarjetasProductosInicio(velas);