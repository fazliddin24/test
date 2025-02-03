const products = [
    { id: 1, name: "Laptop", price: 599.99, image: "https://cdn.mos.cms.futurecdn.net/3kcgKLkfPRbskpsYzW239d.jpg" },
    { id: 2, name: "Smartphone", price: 299.99, image: "https://cdn.mediainvest.uz/corecms/post-images/01JCQ7CA4YTHA5CH8PHDPKFSAR.webp" },
    { id: 3, name: "Headphones", price: 69.99, image: "https://i.ebayimg.com/images/g/AjAAAOSwolxgoiuA/s-l1200.jpg" }
];

const cart = [];

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Savatga qo'shish</button>
            </div>
        `;
    });
}

function addToCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        const product = products.find(p => p.id === productId);
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        itemCount += item.quantity;
        cartItems.innerHTML += `<li>
            ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
            <button onclick="removeFromCart(${index})">❌</button>
        </li>`;
    });

    cartCount.innerText = itemCount;
    totalPrice.innerText = total.toFixed(2);
}

function removeFromCart(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

function checkout() {
    alert("Rahmat! Sizning buyurtmangiz qabul qilindi.");
    cart.length = 0;
    updateCart();
}

displayProducts();
