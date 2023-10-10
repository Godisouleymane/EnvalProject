console.log(factureArray)
const barreSearch = document.querySelector('.barre')
const tbody = document.getElementById('myTbody');
const monArray = factureArray;

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
        <td>Aucun element trouvé</td>
        </tr>
       `
    }
}


barreSearch.addEventListener('input', () => {
    const searchText = barreSearch.value.toLowerCase();
    recherche(searchText);
});