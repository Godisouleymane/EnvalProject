const getTrId = JSON.parse(localStorage.getItem('trId'))
const spanTitle = document.querySelectorAll('#span-title')
spanTitle.forEach(span => {
    span.textContent = getTrId.lot
});


const deconnexionButton = document.getElementById('deconnexionLink');

deconnexionButton.addEventListener('click', () => {
    localStorage.removeItem('userIsConnected')
})