const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar");

function crearTarjetasProductosInicio(){
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse (localStorage.getItem("velas"));
    console.log(productos);
    if(productos && productos.length > 0){
    productos.forEach(producto => {
        const nuevaVela = document.createElement("div");
        nuevaVela.classList = "tarjeta-producto";
        nuevaVela.innerHTML = `
        <img src="./img/vela${producto.id}.jpg">
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        <div>
        <button>-</button>
        <span class="cantidad">${producto.cantidad}</span>
        <button>+</button>
        </div>
        `;
    
    contenedorTarjetas.appendChild(nuevaVela);

    nuevaVela.getElementsByTagName("button")[1].addEventListener("click", (e) => {
        agregarAlCarrito(producto);
        const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
        cuentaElement.innerText = agregarAlCarrito(producto);
        actualizarTotales();
    });

    nuevaVela.getElementsByTagName("button")[0].addEventListener("click", (e) => {
        restarAlCarrito(producto);
        crearTarjetasProductosInicio();
        actualizarTotales();
    });
});
}
}


crearTarjetasProductosInicio();
actualizarTotales();
function actualizarTotales(){
    const productos =JSON.parse(localStorage.getItem("velas"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length>=0){
        productos.forEach(producto =>{
        unidades += producto.cantidad;
        precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
    
}

function revisarMensajesVacios(){
    const productos = JSON.parse(localStorage.getItem("velas"));
    carritoVacioElement.classList.toggle("escondido", productos && productos.length>0);
    totales.classList.toggle("escondido", !(productos && productos.length>0));
}

revisarMensajesVacios();

reiniciarCarritoElement.addEventListener("click",reiniciarCarrito);
function reiniciarCarrito(){
    localStorage.removeItem("velas");
    actualizarTotales();
}