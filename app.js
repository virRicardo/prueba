// alert();
//variable q mantiene el estado del carrito visible
var carritoVisible = false;
//espero q se carguen los elementos de la pag
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}

function ready(){
    //agrego funcionalidad a los botones del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0; i < botonesEliminarItem.length;i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click', eliminarItemCarrito);
    }
}
//elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    //actualizo el total del carrito
    actualizarTotalCarrito();

    //controlo si hay elementos en el carrito una vez q se elimino y si no hay oculto el carrito
    ocultarCarrito();
}

function actualizarTotalCarrito(){
    //selecciono el contenedor carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;
    //recorremos cada elemneto
    for (var i=0; i < carritoItems.length;i++);{
    var item = carritoItems[i];
    var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
    console.log(precioElemento);
    //quito el simbolo peso y punto
    var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
    console.log(precio);
    var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
    var cantidad = cantidadItem.value;
    console.log(cantidad);
    total = total + (precio * cantidad);
}

total = Math.round(total*100)/100;
document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocalesString("es") + ',00';
}

function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity='0';
        carritoVisible = false;
    }
}
