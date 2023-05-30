
function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

function calcularTotal() {
    const combo1Cantidad = parseInt(document.getElementById("combo1").value);
    const combo2Cantidad = parseInt(document.getElementById("combo2").value);
    const combo3Cantidad = parseInt(document.getElementById("combo3").value);
  
    const combo1Precio = 5500;
    const combo2Precio = 4000;
    const combo3Precio = 6000;

  
    let subtotal = combo1Cantidad * combo1Precio + combo2Cantidad * combo2Precio + combo3Cantidad * combo3Precio;
    
    const extrasList = document.getElementById("extras-list");
    const extrasCheckboxes = extrasList.getElementsByTagName("input");

    for (let i = 0; i < extrasCheckboxes.length; i++) {
      if (extrasCheckboxes[i].checked) {
        subtotal += parseInt(extrasCheckboxes[i].value);
      }
    }

    
    document.getElementById("subtotal").textContent = "Subtotal: $" + subtotal.toFixed(2);
    let descuento = 0;
    let total = subtotal;

  
    if (subtotal > 10000) {
      descuento = subtotal * 0.15;
    } else if (subtotal > 7000) {
      descuento = subtotal * 0.1;
    } else if (subtotal > 5000) {
      descuento = subtotal * 0.05;
    }
  
    total = total - descuento;

    document.getElementById("total").textContent = "Total (con descuento): $" + total.toFixed(2);
}
    function resetearCampos() {
      document.getElementById("combo1").value = 0;
      document.getElementById("combo2").value = 0;
      document.getElementById("combo3").value = 0;
      document.getElementById("subtotal").textContent = "";
      document.getElementById("total").textContent = "";

      var extrasList = document.getElementById("extras-list");
      var extrasCheckboxes = extrasList.getElementsByTagName("input");
    
      for (let i = 0; i < extrasCheckboxes.length; i++) {
        extrasCheckboxes[i].checked = false;
      }

    }


let nroPedido =Math.floor(Math.random()*1000) ;

  function confirmar () {
    Swal.fire({
      title: '¿Completaste tu compra?',
      showDenyButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Rechazar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`¡Gracias por tu compra!`, `<i>Tu numero de pedido es #${nroPedido} </i>`, 'success')
      } else if (result.isDenied) {
        Swal.fire('¡Seguí comprando!', '', 'info')
      }
    })
  }
