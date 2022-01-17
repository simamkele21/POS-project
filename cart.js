let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

console.log(cart);

// read

function readCart(cart) {
  document.querySelector("#cart").innerHTML = ``;

  cart.forEach((product, position) => {
    document.querySelector("#cart").innerHTML += `
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${product.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"> ${product.title}</h5>
        <p class="card-text">${product.price}</p>
        <input type="number" min=1 value=${
          product.qty
        } id="qty${position} onchange="updateCart(${position})">
        <p>R${parseInt(product.qty * product.price)}</p>
        <button class="btn btn-danger" onclick="deleteCart(${position})">Remove Item</button>
    </div>
    </div>
  </div>
</div>
`;
  });

  document.querySelector("#cart").innerHTML += `
  <h1>Your total is R${calculateTotal()}</h1>
  <button class="btn btn-primary" onclick="checkout()">Checkout</button>
  `;
}

readCart(cart);

// update
function updateCart(position) {
  let qty = document.querySelector(`#qty${position}`).value;
  cart[position] = { ...cart[position], qty };
  localStorage.setItem("cart", JSON.stringify(cart));
  readCart(cart);
}

// delete
function deleteCart(position) {
  cart.splice(position, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  readCart(cart);
}

// calculate
function calculateTotal() {
  let total = 0;

  cart.forEach((product) => {
    total = total + product.price * product.qty;
  });
  return total.toFixed(2);
}
