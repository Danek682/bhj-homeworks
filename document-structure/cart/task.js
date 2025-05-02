let minus = document.querySelectorAll(".product__quantity-control_dec");
let plus = document.querySelectorAll(".product__quantity-control_inc");
let value = document.querySelectorAll(".product__quantity-value");
let products = document.querySelectorAll(".product"); //все продукты
let cartProducts = document.querySelector(".cart__products"); // Продукты в корзине
let addButtons = document.querySelectorAll(".product__add"); //кнопка добавить в корзину
let removeButtons = document.querySelectorAll(".product__remove"); // кнопка уменьшения в корзине

for (let i = 0; i < products.length; i++) {
    let count = 1;

    plus[i].addEventListener("click", () => {
        count++;
        value[i].textContent = count;
    });

    minus[i].addEventListener("click", () => {
        if (count > 1) {
            count--;
            value[i].textContent = count;
        }
    });

    addButtons[i].addEventListener("click", () => {
        let productId = products[i].dataset.id;
        let imageSrc = products[i].querySelector(".product__image").src;
        let productsInCart = cartProducts.querySelector(
            `.cart__product[data-id="${productId}"]`
        );

        if (productsInCart) {
            let productInCart = productsInCart.querySelector(
                ".cart__product-count"
            );
            productInCart.textContent =
                parseInt(productInCart.textContent) + count;
        } else {
            let div = document.createElement("div");
            div.classList.add("cart__product");
            div.setAttribute("data-id", productId);

            div.innerHTML = `
            <img class="cart__product-image" src="${imageSrc}">
            <div class="cart__product-count">${count}</div>
            `;
            cartProducts.appendChild(div);
        }
        count = 1;
        value[i].textContent = count;
    });

    removeButtons[i].addEventListener("click", () => {
        let productId = products[i].dataset.id;
        let productsInCart = cartProducts.querySelector(
            `.cart__product[data-id="${productId}"]`
        );

        if (productsInCart) {
            let productInCart = productsInCart.querySelector(
                ".cart__product-count"
            );
            let currentCount = parseInt(productInCart.textContent);
            let newCount = currentCount - count;

            if (newCount > 0) {
                productInCart.textContent = newCount;
            } else {
                productsInCart.remove();
            }
        }
    });
}
