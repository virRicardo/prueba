
var botonesEliminarItem = document.getElementsByClassName('btn_eliminar');

this.addEventListener('click',function(e){
  
    if(e.target.classList.contains('btn_eliminar')){
    //actualizo el total del carrito
    actualizarTotalCarrito();

    //controlo si hay elementos en el carrito una vez q se elimino y si no hay oculto el carrito
    ocultarCarrito();}
     } );
