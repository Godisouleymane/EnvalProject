const profileNavBar = document.getElementById('profile-navbar');
const sideBarIcon = document.querySelector('.fa-bars');
const sideBar = document.querySelector('.sidebar')
function DOMContentLoaded() {
    document.addEventListener('DOMContentLoaded', ()=> {
        const imageUrl = localStorage.getItem('user-profile');
        if (imageUrl) {
            profileNavBar.setAttribute('src', imageUrl)
        }
    })
    
}

DOMContentLoaded();

sideBarIcon.addEventListener('click', () => {
    if (sideBar.style.display === "block") {
        sideBar.style.display = "none"
    } else {
        sideBar.style.display = "block"
    }
   
})