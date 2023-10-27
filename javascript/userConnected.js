const getUsersConnected = JSON.parse(localStorage.getItem('userIsConnected'))


if (window.location.pathname === '/dashboard.html' || window.location.pathname === '/facture.html' || window.location.pathname === '/commande.html' || window.location.pathname === '/suivi.html' || window.location.pathname === '/serviceClient.html' || window.location.pathname === '/suividetail.html' || window.location.pathname === '/profile.html') {
    if (!getUsersConnected) {
        window.location.href = 'connexion.html';
    }
};

