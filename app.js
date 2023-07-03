
function openNav(){confirm
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

function calculateTotal() {
    const combo1Quantity = parseInt(document.getElementById("combo1").value);
    const combo2Quantity = parseInt(document.getElementById("combo2").value);
    const combo3Quantity = parseInt(document.getElementById("combo3").value);
  
    const combo1Price = 5500;
    const combo2Price = 4000;
    const combo3Price = 6000;

  
    let subtotal = combo1Quantity * combo1Price + combo2Quantity * combo2Price + combo3Quantity * combo3Price;
    
    const extrasList = document.getElementById("extras-list");
    const extrasCheckboxes = extrasList.getElementsByTagName("input");

    for (let i = 0; i < extrasCheckboxes.length; i++) {
      if (extrasCheckboxes[i].checked) {
        subtotal += parseInt(extrasCheckboxes[i].value);
      }
    }

    
    document.getElementById("subtotal").textContent = "Subtotal: $" + subtotal.toFixed(2);
    let discount = 0;
    let total = subtotal;

  
    if (subtotal > 15000) {
      discount = subtotal * 0.15;
    } else if (subtotal > 10000) {
      discount = subtotal * 0.1;
    } else if (subtotal > 7000) {
      discount = subtotal * 0.05;
    }
  
    total = total - discount;

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


let orderNro =Math.floor(Math.random()*1000) ;

  function confirmar () {
    Swal.fire({
      title: '¿Completaste tu compra?',
      showDenyButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Rechazar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`¡Gracias por tu compra!`, `<i>Tu numero de pedido es #${orderNro} </i>`, 'success')
      } else if (result.isDenied) {
        Swal.fire('¡Seguí comprando!', '', 'info')
      }
    })
  }
