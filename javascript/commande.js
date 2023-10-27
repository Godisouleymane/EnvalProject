const tbody = document.getElementById('commandeTbody');
const searchBarre = document.querySelector('.barre')
const sideBarIcon = document.querySelector('.fa-bars');
const sideBar = document.querySelector('.sidebar');

function AfficherLesEleements(commandeArray) {

  commandeArray.forEach(item => {
    let status = '';

    if (item.status === 'Terminée') {
      status = 'statusColor'
    }

    tbody.innerHTML += `
            <tr>
            <td class="delete-bd-left">${item.id}</td>
            <td>${item.name}</td>
            <td>${item.date}</td>
            <td class="td-color ${status}">${item.status}</td>
            <td><button>Voir</button></td>
            </tr>
    `
  })
}
AfficherLesEleements(commandeArray)


function recherche(searchText) {
  tbody.innerHTML = '';
  commandeArray.forEach(item => {
    if (item.name.toLowerCase().includes(searchText)) {
      tbody.innerHTML += `
                <tr>
                <td class="delete-bd-left">${item.id}</td>
                <td>${item.name}</td>
                <td>${item.date}</td>
                <td class="td-color ${status}">${item.status}</td>
                <td><button>Voir</button></td>
                </tr>
            `
    }
  })
  if (tbody.innerHTML === '') {
    tbody.innerHTML = `
        <tr>
        <td>Aucun element trouvé</td>
        </tr>`
  }
}


searchBarre.addEventListener('input', () => {
  const searchText = searchBarre.value.toLowerCase();
  recherche(searchText);
});



const compare = function (ids, asc) {
  return function (row1, row2) {
    const tdValue = function (row, ids) {
      return row.children[ids].textContent;
    }
    const tri = function (v1, v2) {
      if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)) {
        return v1 - v2;
      }
      else {
        return v1.toString().localeCompare(v2);
      }
      return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
    };
    return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
  }
}

const thx = document.querySelectorAll('th');
const trxb = tbody.querySelectorAll('tr');
thx.forEach(function (th) {
  th.addEventListener('click', function () {
    let classe = Array.from(trxb).sort(compare(Array.from(thx).indexOf(th), this.asc = !this.asc));
    classe.forEach(function (tr) {
      tbody.appendChild(tr)
    });
  })
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

DOMContentLoaded();

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