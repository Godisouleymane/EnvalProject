const fileInput = document.getElementById("choose-file")
const profileNavBar = document.getElementById('profile-navbar')
const deleteProfile = document.getElementById('delete-user-profile')
const tbordSpan = document.querySelector('.tbord-span');
const inputNameUser = document.getElementById('input-name-user');
const inputEmailUser = document.getElementById('input-email-user');
const biographieArea = document.getElementById('biographie');
const sideBarIcon = document.querySelector('.fa-bars');
const sideBar = document.querySelector('.sidebar')

tbordSpan.addEventListener('click', () => {
    window.location = 'dashboard.html'
})

function notification(element, titre, message) {
    element.classList.remove('hidden');
    element.innerHTML = `
    <div class="card-header">
        <h3 class="text-header">${titre}</h3>
    </div>
    <div class="card-body">
        <h5 class="text-body">${message}</h5>
    </div>
    `;
    setTimeout(() => {
        element.classList.add('hidden')
    }, 2000);
}

function addProfile() {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        localStorage.setItem('user-profile', reader.result)
    })
    const file = fileInput.files[0]
    if (file) {
        const src = URL.createObjectURL(file)
        document.getElementById('user-profile').setAttribute('src', src)
        profileNavBar.setAttribute('src', src)
        notification(cardNotification, "Modification de l'avatar", "Votre photo a été ajouté avec sucess")
    }

    reader.readAsDataURL(fileInput.files[0])
}

fileInput.addEventListener('change', () => {
    addProfile()
})


function DOMContentLoaded() {
    document.addEventListener('DOMContentLoaded', () => {
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

deleteProfile.addEventListener('click', () => {
    deleteUserProfile()
    notification(cardNotification, "Suppression de l'avatar", "Votre photo a été supprimée avec success")
})


function sendUserInfo() {
    if (inputEmailUser.value === "" || inputNameUser.value === ""  || biographieArea.value === "") {
        notification(cardNotification, "Données perssonelles", "Veuillez renseigner tout les champs")
    } else {
        const inputEmailUserValue = inputEmailUser.value;
        const inputNameUserValue = inputNameUser.value;
        const biographieAreaVAlue = biographieArea.value;
        localStorage.setItem('nameOfUser', JSON.stringify(inputNameUserValue));
        localStorage.setItem('emailOfUser', JSON.stringify(inputEmailUserValue));
        localStorage.setItem('biographieOfUser', JSON.stringify(biographieAreaVAlue))
        notification(cardNotification, "Modification du profil", "La mise a jour a été effectué avec success")
    }

}

const getNameOfUser = JSON.parse(localStorage.getItem('nameOfUser'));
const getEmailOfUser = JSON.parse(localStorage.getItem('emailOfUser'));
const getBiographieOfUser = JSON.parse(localStorage.getItem('biographieOfUser'))
inputEmailUser.value = getEmailOfUser;
inputNameUser.value = getNameOfUser;
biographieArea.value = getBiographieOfUser;

sideBarIcon.addEventListener('click', () => {
    if (sideBar.style.display === "block") {
        sideBar.style.display = "none"
    } else {
        sideBar.style.display = "block"
    }

})
