let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        title: "Kookabuura Ghost Pro Players Elite Cricket Bat (Short Handle)",
        category: "Kookabuura",
        price: 15999.0,
        image: "https://i.postimg.cc/tR2j1kV1/Ghost-Pro-Players-Bat.jpg",
      },
      {
        title: "Kookaburra Pace PRO 3.0 Junior Cricket Bat",
        category: "Kookabuura",
        price: 2499.0,
        image: "https://i.postimg.cc/KY7g20FN/Pace-3-0-Cricket-bat.jpg",
      },
      {
        title: "Kookaburra Kahuna Players Junior Cricket Bat",
        category: "Kookabuura",
        price: 499.0,
        image: "https://i.postimg.cc/2yPTb0tt/Kahuna-Pro-Players-Bat.jpg",
      },
      {
        title: "Kookaburra Ghost PRO 1500 Junior Bat (Harrow)",
        category: "Kookabuura",
        price: 1999.0,
        image:
          "https://i.postimg.cc/NjwFb1vv/2-A19193-Ghost-Lite-Bat-Grouped.png",
      },
      {
        title:
          "Gray-Nicolls Kane Williamson Delta Players Edition Bat (Short Handle)",
        category: "Gray-Nicolls",
        price: 14999.0,
        image:
          "https://i.postimg.cc/cCgBSPmz/Gray-Nicholls-Kane-Williamson.jpg",
      },
      {
        title: "Gray-Nicolls Classic GN5 Big Edge Cricket Bat (Short Handle)",
        category: "Gray-Nicolls",
        price: 6999.0,
        image:
          "https://i.postimg.cc/kgB6hWTj/gray-nicolls-classic-gn5-big-edge-english-willow-cricket-bat-size-sh-ethlits-com-1.jpg",
      },
      {
        title: "Gray-Nicolls Kaboom 100 Cricket Bat",
        category: "Gray-Nicolls",
        price: 5999.0,
        image:
          "https://i.postimg.cc/rskZfVcJ/gray-nicolls-kaboom-100-english-willow-cricket-bat-size-sh-ethlits-com-1.jpg",
      },
      {
        title: "Gray Nicolls Cricket Bat",
        category: "Gray-Nicolls",
        price: 511.16,
        image: "https://i.postimg.cc/Cx3GGvwC/02.jpg",
      },
      {
        title: "GM Diamond 909 (2021)",
        category: "GM",
        price: 4476.52,
        image: "https://i.postimg.cc/MTVdfvND/thumbnail-img-5555.jpg",
      },
      {
        title: "Siren Original Limited Edition Junior Cricket Bat",
        category: "GM",
        price: 4220.14,
        image: "https://i.postimg.cc/KY7g20FN/Pace-3-0-Cricket-bat.jpg",
      },
      {
        title: "MAESTRO PRO LE GM BAT",
        category: "GM",
        price: 15095.85,
        image:
          "https://i.postimg.cc/hv7ztdYD/GM-maestro-LE-cricket-bat-640x640.jpg",
      },
      {
        title: "GM NOIR DXM 909 TTNOW CRICKET BAT SENIOR",
        category: "GM",
        price: 13145.02,
        image: "https://i.postimg.cc/cL1Dr1sq/noirback-l.jpg",
      },
    ];

// console.log(products);

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// read

function read(products) {
  document.querySelector("#read").innerHTML = "";

  products.forEach((product, position) => {
    document.querySelector("#read").innerHTML += `
    <div class="card">
  <img src=${product.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>${product.title}</b></h4> 
    <p>${product.price}</p> 
    <input type="number" name="Quantity" class="form control mb-2" id="updateCart(${position})" min="1" value="1">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update-modal-${position}" onclick ="updateProduct(${position})">Update</button>
        <button class="btn btn-danger" onclick ="deleteProduct(${position})">Delete</button>
        <button class="btn btn-danger" onclick ="addToCart(${position})">Add to Cart</button>
  </div>
</div>

  <div class="modal fade" id="update-modal-${position}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit ${product.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
      TITLE<input type="text" id="update-title-${position}"/> <br>
      CATEGORY<select name="category" id="update-category-${position}"><br>
          <option value="select">-select one-</option><br>
      <option value="kookabuura">Kookabuura</option>
      <option value="Gary-Nicolls">Gray-Nicolls</option>
      <option value="GM">GM</option>
    </select><br>
    PRICE<input type="text" id="update-price-${position}" value=""/><br>
    IMAGE LINK<input type="text" id="update-image-${position}" value=""/><br>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update-modal-${position}" onclick="updateProduct(${position})" >Save changes</button>
              </div>
            </div>
          </div>
        </div>
    `;
  });
}
read(products);

// create

function createProduct() {
  let title = document.querySelector("#add-title").value;
  let category = document.querySelector("#select-category").value;
  let image = document.querySelector("#add-image").value;
  let price = document.querySelector("#add-price").value;
  try {
    if (!title || !price || !image) throw new Error("please select an item");
    products.push({
      title,
      category,
      price,
      image,
    });
    localStorage.setItem("products", JSON.stringify(products));

    read(products);
  } catch (err) {
    alert(err);
  }
}

// update
function updateProduct(position) {
  let title = document.querySelector(`#update-title-${position}`).value;
  let category = document.querySelector(`#update-category-${position}`).value;
  let image = document.querySelector(`#update-image-${position}`).value;
  let price = document.querySelector(`#update-price-${position}`).value;
  try {
    if (!title || !price || !image) {
      throw new Error("please select an item");
    }
    products[position] = {
      title,
      category,
      price,
      image,
    };
    localStorage.setItem("products", JSON.stringify(products));

    read(products);
  } catch (err) {
    alert(err);
  }
}
// delete

function deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products));
    read(products);
  }
}

// ADD to Cart

function addToCart(position) {
  let qty = document.querySelector(`#update-price-${position}`).value;
  let added = false;
  cart.forEach((product) => {
    if (product.title == products[position].title) {
      alert(
        `You have successfully added ${qty} ${products[position].title} to the cart`
      );
      product.qty = parseInt(product.qty) + parseInt(qty);
      added = true;
    }
  });
  if (!added) {
    cart.push({ ...products[position], qty });
    alert(
      `You have successfully added ${qty} ${products[position].title} to the cart`
    );
  }

  // showCartBadge();

  localStorage.setItem("cart", JSON.stringify(cart));
  // console.log(cart);
  // localStorage.setItem("cart", JSON.stringify(cart));
}

// Update Cart Badge
// function showCartBadge() {
//   document.querySelector("#badge").innerHTML = cart ? cart.length : "";
// }

// SORT BY CATEGORY
function sortCategory() {
  let category = document.querySelector("#sortCategory").value;

  if (category == "All") {
    return read(products);
  }

  let foundProducts = products.filter((product) => {
    return product.category == category;
  });

  read(foundProducts);
  console.log(foundProducts);
}

// SORT BY NAME

function sortName() {
  let direction = document.querySelector("#sortName").value;

  let sortedProducts = products.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "Descending") sortedProducts.reverse();
  console.log(sortedProducts);
  read(products);
}

// SORT BY PRICE

function priceSort() {
  console.log(products);
  let direction = document.querySelector("#priceSort").value;

  let sortedPrice = products.sort((a, b) => a.price - b.price);

  if (direction == "Descending") sortedPrice.reverse();

  read(sortedPrice);
}
