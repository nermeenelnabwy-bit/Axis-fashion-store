const themeBtn = document.getElementById('themetoggle');
const icon = document.getElementById('themeicon');


const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');

}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    let theme = 'light';

    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');

        theme = 'dark';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        icon.style.color = "";
        theme = 'light';
    }


    localStorage.setItem('theme', theme);
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cart-items");
let clearBtn = document.getElementById("clear-cart");
function displayCart() {
    if (!container) return;
    container.innerHTML = "";
    if (cart.length === 0) {
        container.innerHTML = "<p>Cart is empty</p>";
        if (typeof clearCart === "function") clearCart();
        return;
    }
    cart.forEach((item, index) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <div class="cart-item">
                <img src="${item.image}" class="cart-img">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                    <button class="remove-btn" onclick="removeItemFromCart(${index})">Remove</button>
                </div>
            </div>
            <hr>
        `;
        container.appendChild(div);
    });
}
function removeItemFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    if (typeof removeFromCart === "function") {
        removeFromCart();
    }
    displayCart();
}

if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        if (typeof clearCart === "function") {
            clearCart();
        }
        displayCart();
    });
}
displayCart();
function logout() {
    localStorage.removeItem("userEmail");
    alert("You are about to log out");
    window.location.href = "sign_in.html";
};
window.addEventListener('load', function () {
    const logoutBtn = document.getElementById('logout-btn');
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
        logoutBtn.style.display = 'none';
    }
    else {
        logoutBtn.style.display = 'block';
    };
});