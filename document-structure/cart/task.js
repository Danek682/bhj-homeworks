let minus = document.querySelectorAll(".product__quantity-control_dec");
let plus = document.querySelectorAll(".product__quantity-control_inc");
let value = document.querySelectorAll(".product__quantity-value");
let products = document.querySelectorAll(".product");
let cartProducts = document.querySelector(".cart__products");
let addButtons = document.querySelectorAll(".product__add");
let cart = [];

function updateCart() {
    cartProducts.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        let div = document.createElement("div");
        div.classList.add("cart__product");
        div.setAttribute("data-id", cart[i].id);

        div.innerHTML = `
      <img class="cart__product-image" src="${cart[i].image}">
      <div class="cart__product-count"> ${cart[i].quantity}</div>
      `;
        cartProducts.appendChild(div);
    }
}

for (let i = 0; i < products.length; i++) {
    let count = 1;

    plus[i].addEventListener("click", () => {
        count++;
        value[i].textContent = count;
    });

    minus[i].addEventListener("click", () => {
        if (count >= 2) {
            count--;
            value[i].textContent = count;
        }
    });

    addButtons[i].addEventListener("click", () => {
        let productId = products[i].dataset.id;
        let imageSrc = products[i].querySelector(".product__image").src;
        let productInCart = cart.find((item) => item.id === productId);
        if (productInCart) {
            productInCart.quantity += count;
        } else {
            cart.push({
                id: productId,
                image: imageSrc,
                quantity: count,
            });
        }
        updateCart();
        count = 1;
        value[i].textContent = count;
    });
}
