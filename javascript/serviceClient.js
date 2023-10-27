const profileNavBar = document.getElementById('profile-navbar')

  function DOMContentLoaded() {
      document.addEventListener('DOMContentLoaded', ()=> {
          const imageUrl = localStorage.getItem('user-profile');
          if (imageUrl) {
              profileNavBar.setAttribute('src', imageUrl)
          }
      })
      
  }
  
DOMContentLoaded()
  
const deconnexionButton = document.getElementById('deconnexionLink');

deconnexionButton.addEventListener('click', () => {
    localStorage.removeItem('userIsConnected')
})