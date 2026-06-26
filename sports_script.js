let images = document.querySelectorAll(".imggg");

images.forEach(function (img) {
    img.addEventListener("click", function () {

        let description = this.parentElement.querySelector("p");

        if (description.style.display === "none" || description.style.display === "") {
            description.style.display = "block";
        } else {
            description.style.display = "none";
        }
    });
});





let buttons = document.querySelectorAll(".cart-btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        let product = btn.closest("section");

        let item = {
            name: product.querySelector("h3").innerText,
            price: product.querySelector(".new").innerText,
            image: product.querySelector("img").src
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(item);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Added to cart!");
    });
});
    

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





document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.search-input');
  const productCards = document.querySelectorAll('section');
  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();
    let foundCount = 0;

    productCards.forEach(function (card) {
      const productName = card.querySelector('h3').textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        card.classList.remove('hide');
        foundCount++;
      } else {
        card.classList.add('hide');
      }
    });


  });
});
function logout(){
  localStorage.removeItem("userEmail");
  alert("You are about to log out");
  window.location.href="sign_in.html";
};
window.addEventListener('load',function(){
  const logoutBtn = document.getElementById('logout-btn');
  const userEmail = localStorage.getItem('userEmail');
  if(!userEmail){
    logoutBtn.style.display = 'none';
  }
  else{
    logoutBtn.style.display = 'block';
  };
});