const tbody = document.getElementById('suiviDesEchantillonsTbody');
const barreSearch = document.querySelector('.barre')

suiviDesEchantillonsArray.forEach(item => {
    tbody.innerHTML += `
        <tr class="active-ligne">
        <td id="delete-border-left">${item.lot}</td>
        <td>${item.etat}</td>
        <td>${item.date}</td>
        <td>${item.rapport}</td>
        <td>
            <a href="suividetail.html">
                <button class="btn-table">Voir</button>
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
            <a href="suividetail.html">
                <button class="btn-table">Voir</button>
            </a>
        </td>
    </tr>
            `
        }
    })
    if (tbody.innerHTML === '') {
        tbody.innerHTML =  `
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