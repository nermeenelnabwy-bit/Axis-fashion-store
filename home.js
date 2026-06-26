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
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const categoryCards = document.querySelectorAll('.category-card');
    const heroSection = document.querySelector('.hero');
    if (!searchInput) return;
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase().trim();
        if (searchTerm === "") {
            if (heroSection) heroSection.classList.remove('hide');
            categoryCards.forEach(card => card.classList.remove('hide'));
            return;
        }
        if (heroSection) heroSection.classList.add('hide');
        categoryCards.forEach(card => {
            const span = card.querySelector('span');
            if (span) {
                const categoryName = span.textContent.toLowerCase();
                if (categoryName.includes(searchTerm)) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            }
        });
    });
});