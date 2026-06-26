


const themeBtn = document.getElementById('themetoggle');
const icon = document.getElementById('themeicon');
const image = document.getElementById('mainImage');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
        image.src = "sign_in/dark.jpg"; 
} else {
    image.src = "sign_in/light.jpg"; 
}



themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    let theme = 'light';

    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
          image.src = "sign_in/dark.jpg";
        theme = 'dark';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        image.src = "sign_in/light.jpg"; 
        icon.style.color = "";
        theme = 'light';
    }


    localStorage.setItem('theme', theme);
});
function saveData() {
  let email = document.getElementById("email").value;
  let remember = document.getElementById("remember").checked;

  if (remember) {
    localStorage.setItem("userEmail", email);
    console.log("Data saved!");
  } else {
    localStorage.removeItem("userEmail");
  }
}

window.addEventListener('load', function () {
  let rememberBox = document.getElementById("remember");
  let savedEmail = localStorage.getItem("userEmail");
  if (savedEmail && rememberBox) {
    document.getElementById("email").value = savedEmail;
    rememberBox.checked = true;
  }
  
});
function logout(){
  localStorage.removeItem("userEmail");
  alert("You are about to log out");
  window.location.href="sign_in.html";
};
window.addEventListener('load', function(){
   const logoutBtn = document.getElementById('logout-btn');
  const userEmail = localStorage.getItem('userEmail');
  if(!userEmail){
    logoutBtn.style.display = 'none';
  }
  else{
    logoutBtn.style.display = 'block';
  };
});