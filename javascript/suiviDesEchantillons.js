const tbody = document.getElementById('suiviDesEchantillonsTbody');
const barreSearch = document.querySelector('.barre')
const sideBarIcon = document.querySelector('.fa-bars');
const sideBar = document.querySelector('.sidebar')

suiviDesEchantillonsArray.forEach(item => {
    tbody.innerHTML += `
        <tr class="active-ligne">
        <td id="delete-border-left">${item.lot}</td>
        <td>${item.etat}</td>
        <td>${item.date}</td>
        <td>${item.rapport}</td>
        <td>
            <a id='buttonLink'>
                <button data-id='${item.id}' class="btn-table">Voir</button>
            </a>
        </td>
    </tr>
    `
})




function recherche(searchText) {
    tbody.innerHTML = '';
    suiviDesEchantillonsArray.forEach(item => {
        if (item.lot.toLowerCase().includes(searchText)) {
            tbody.innerHTML += `
            <tr class="active-ligne">
        <td id="delete-border-left">${item.lot}</td>
        <td>${item.etat}</td>
        <td>${item.date}</td>
        <td>${item.rapport}</td>
        <td>
            <a id='buttonLink'>
                <button data-id='${item.id}' class="btn-table">Voir</button>
            </a>
        </td>
    </tr>
            `
        }
    })
    if (tbody.innerHTML === '') {
        tbody.innerHTML = `
        <tr>
        <td>Aucun element trouvé</td>
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
    document.addEventListener('DOMContentLoaded', () => {
        const imageUrl = localStorage.getItem('user-profile');
        if (imageUrl) {
            profileNavBar.setAttribute('src', imageUrl)
        }
    })

}

DOMContentLoaded()


const tableButton = document.querySelectorAll('.btn-table')

tableButton.forEach(button => {
    button.addEventListener('click', () => {
        let buttonId = button.dataset.id
        let trId = suiviDesEchantillonsArray[buttonId - 1]

        if (trId.rapport === 'Disponible') {
            const buttonLink = document.querySelectorAll('#buttonLink');
            buttonLink.forEach(link => {
                link.href = 'suividetail.html';
            });
            //  buttonLink.target = '_blank'
            localStorage.setItem('trId', JSON.stringify(trId));
        }
    })
});

sideBarIcon.addEventListener('click', () => {
    if (sideBar.style.display === "block") {
        sideBar.style.display = "none"
    } else {
        sideBar.style.display = "block"
    }

})
