function agregarAlCarrito(producto){
    const memoria = JSON.parse (localStorage.getItem("velas"));
    console.log(memoria);
    let cuenta = 0;
    if(!memoria){
        const nuevoProducto = getNuevoProductoParaMmemoria(producto);
        localStorage.setItem("velas",JSON.stringify([nuevoProducto]));
        cuenta = 1;
    } else {
        const indiceProducto = memoria.findIndex(vela => vela.id === producto.id);
        console.log(indiceProducto)
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(getNuevoProductoParaMmemoria(producto))
            cuenta : 1;
        }else{
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("velas",JSON.stringify(nuevaMemoria));
    
    }
    actualizarNumeroCarrito();
    return cuenta;
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("velas"));
    const indiceProducto = memoria.findIndex(vela => vela.id === producto.id);
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1);
        
    }else{
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("velas",JSON.stringify(memoria));
    actualizarNumeroCarrito();
}

/*toma un producto, le agrega cantidad 1 y lo devuelve*/
function getNuevoProductoParaMmemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito");

function actualizarNumeroCarrito(){
    const memoria = JSON.parse (localStorage.getItem("velas"));
    if(memoria && memoria.length >0){
        const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0);
        cuentaCarritoElement.innerText = cuenta;
    }else{
        cuentaCarritoElement.innerText = 0;
    }
    
}
actualizarNumeroCarrito();