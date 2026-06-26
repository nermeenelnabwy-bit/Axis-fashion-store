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