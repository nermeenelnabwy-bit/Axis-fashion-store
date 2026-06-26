let count = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
document.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
});
function addToCart() {
    count++;
    saveAndRefresh();
    const el = document.getElementById('cart-count');
    if(el) {
        el.style.transform = "scale(1.3)";
        setTimeout(() => el.style.transform = "scale(1)", 200);
    }
}
function removeFromCart() {
    if (count > 0) {
        count--;
        saveAndRefresh();
    }
}
function saveAndRefresh() {
    localStorage.setItem('cartCount', count);
    updateCartUI();
}
function updateCartUI() {
    const cartCountElement = document.getElementById('cart-count');
    if(cartCountElement) {
        cartCountElement.innerText = count;
        
        if (count === 0) {
            cartCountElement.style.display = "none";
        } else {
            cartCountElement.style.display = "flex";
        }
    }
}
function clearCart() {
    count = 0;
    saveAndRefresh();
}