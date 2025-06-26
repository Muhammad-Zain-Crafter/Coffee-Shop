const cartButton = document.getElementById('cartButton');
const cartPopup = document.getElementById('cartPopup');
const cartList = document.getElementById('cartList');
const cartClose = document.getElementById('cartClose');
const cartButtons = document.querySelectorAll('.product-btn');
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Product prices:
const productPrices = {
    "Americano Pure": 250,
    "Espresso": 350,
    "Cappuccino": 400,
    "Latte": 350,
    "Mocha": 450,
    "Macchiato": 500
};

// Store items and quantities:
let cartItems = {};

// Add products to cart:
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        if (cartItems[productName]) {
            cartItems[productName]++;
        } else {
            cartItems[productName] = 1;
        }
        updateCart();
        alert(`${productName} added to cart!`);
    });
});

// Show cart:
cartButton.addEventListener('click', () => {
    cartPopup.style.display = 'block';
});

// Close cart:
cartClose.addEventListener('click', () => {
    cartPopup.style.display = 'none';
});

// Update cart display:
function updateCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;

    for (const [product, quantity] of Object.entries(cartItems)) {
        const price = productPrices[product] * quantity;
        totalPrice += price;

        const li = document.createElement('li');
        li.textContent = `${product} × ${quantity} = Rs ${price}`;
        cartList.appendChild(li);
    }

    // Show total price
    const totalItem = document.createElement('li');
    totalItem.style.fontWeight = 'bold';
    totalItem.style.marginTop = '10px';
    totalItem.textContent = `Total: $${totalPrice}`;
    cartList.appendChild(totalItem);
}
// Handle reviews:
document.getElementById("reviewForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && message) {
      const review = document.createElement("div");
      review.className = "bg-gray-100 p-4 rounded shadow";

      review.innerHTML = `
        <p class="italic text-gray-700">"${message}"</p>
        <h4 class="mt-2 font-semibold text-right">— ${name}</h4>
      `;

      document.getElementById("reviewList").appendChild(review);
      this.reset();
    }
  });