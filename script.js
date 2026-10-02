let cartCount = 0;
let cartItems = [];

// Add product to cart
function addToCart(productName, price) {
cartCount++;

```
cartItems.push({
    name: productName,
    price: price
});

document.getElementById("cart-count").textContent = cartCount;

alert(productName + " added to your cart! 🍫");
```

}

// Show cart
function showCart() {
if (cartItems.length === 0) {
alert("Your cart is empty! 🍫");
return;
}

```
let message = "Your Chocolate Cart:\n\n";
let total = 0;

cartItems.forEach(function(item, index) {
    message +=
        (index + 1) +
        ". " +
        item.name +
        " - ₹" +
        item.price +
        "\n";

    total += item.price;
});

message += "\nTotal: ₹" + total;

alert(message);
```

}

// Contact form
document
.getElementById("contact-form")
.addEventListener("submit", function(event) {

```
    event.preventDefault();

    let name = document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! 🍫\n\nYour message has been received."
    );

    document.getElementById("contact-form").reset();
});
```
