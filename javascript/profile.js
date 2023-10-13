const fileInput = document.getElementById("choose-file")
const profileNavBar = document.getElementById('profile-navbar')
const deleteProfile = document.getElementById('delete-user-profile')
const tbordSpan = document.querySelector('.tbord-span') 


tbordSpan.addEventListener('click', ()=> {
    window.location = 'dashboard.html'
})

function addProfile() {
    const reader = new FileReader();

    reader.addEventListener('load', ()=> {
    localStorage.setItem('user-profile', reader.result)
   })
       const file = fileInput.files[0]
       if (file) {
         const src = URL.createObjectURL(file)
         document.getElementById('user-profile').setAttribute('src', src)
       profileNavBar.setAttribute('src', src)
       }
     
   reader.readAsDataURL(fileInput.files[0])
}

fileInput.addEventListener('change', () => {
  addProfile()
})


function DOMContentLoaded() {
    document.addEventListener('DOMContentLoaded', ()=> {
        const imageUrl = localStorage.getItem('user-profile');
        if (imageUrl) {
            document.getElementById('user-profile').setAttribute('src', imageUrl)
            profileNavBar.setAttribute('src', imageUrl)
        }
    })
    
}

DOMContentLoaded()

function deleteUserProfile() {
    localStorage.removeItem('user-profile');
    location.reload();    
}

deleteProfile.addEventListener('click', ()=> {
  deleteUserProfile()
})
