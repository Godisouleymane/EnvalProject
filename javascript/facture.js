console.log(factureArray)
const barreSearch = document.querySelector('.barre')
const tbody = document.getElementById('myTbody');
const monArray = factureArray;
const sideBarIcon = document.querySelector('.fa-bars');
const sideBar = document.querySelector('.sidebar')

monArray.forEach(item => {
    tbody.innerHTML += `
    <tr>
    <td class="delete-bd-left">${item.id}</td>
    <td>${item.name}</td>
    <td>${item.date}</td>
    <td><button>Voir</button></td>
</tr>
<tr>
    `
})


function recherche(searchText) {
    tbody.innerHTML = '';
    monArray.forEach(item => {
        if (item.name.toLowerCase().includes(searchText)) {
            tbody.innerHTML += `
            <tr>
            <td class="delete-bd-left">${item.id}</td>
            <td>${item.name}</td>
            <td>${item.date}</td>
            <td><button>Voir</button></td>
        </tr>
        <tr>
            `
        }
    })
    if (tbody.innerHTML === '') {
        tbody.innerHTML =  `
        <tr>
        <td colspan="4">Aucun element trouvé</td>
        </tr>
       `
    }
}


barreSearch.addEventListener('input', () => {
    
    const searchText = barreSearch.value.toLowerCase();
    recherche(searchText);
});


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



sideBarIcon.addEventListener('click', () => {
    if (sideBar.style.display === "block") {
        sideBar.style.display = "none"
    } else {
        sideBar.style.display = "block"
    }

})

const deconnexionButton = document.getElementById('deconnexionLink');

deconnexionButton.addEventListener('click', () => {
    localStorage.removeItem('userIsConnected')
})