const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const cardNumber = document.getElementById('card-number').value;
  const expirationDate = document.getElementById('expiration-date').value;
  const cvv = document.getElementById('cvv').value;
  const total = document.getElementById('total').value;


  let boton = document.getElementById("boton");

  boton.addEventListener("click", () => {
      Swal.fire(
          'Aceptado!',
          'Gracias por su compra!',
          'success'
        )
  })
});
