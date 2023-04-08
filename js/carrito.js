const carro = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
      <h1 class="titulo-carrito">Carrito</h1>
    `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h2");
  modalbutton.innerText = "❌";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3 class="nombre-producto">${product.nombre}</h3>
        <p>$${product.precio} </p>
        <span class="restar"> - </span>
        <p>${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: $${product.cantidad * product.precio} </p>
        <span class="delete-product"> Borrar </span>
      `;

    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--;
      }
      saveLocal();
      carro();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      product.cantidad++;
      saveLocal();
      carro();
    });

    let Borrar = carritoContent.querySelector(".delete-product");

    Borrar.addEventListener("click", () => {
      BorrarProducto(product.id);
    });
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `Total a pagar: $${total}`;
  modalContainer.append(totalBuying);


  const totalCarro = document.createElement("div");
  totalCarro.className = "total-content";
  totalCarro.innerHTML = '<a href="http://127.0.0.1:5500/compra.html">Pagar</a>' 
  modalContainer.append(totalCarro);
};
 
verCarrito.addEventListener("click", carro);

const BorrarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);

  console.log(foundId);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  carritoCounter();
  saveLocal();
  carro();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();
