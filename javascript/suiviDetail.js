const sideBarIcon = document.querySelector('.fa-bars');
const sideBar = document.querySelector('.sidebar')


const getTrId = JSON.parse(localStorage.getItem('trId'))
const spanTitle = document.querySelectorAll('#span-title')
spanTitle.forEach(span => {
    span.textContent = getTrId.lot
});


const deconnexionButton = document.getElementById('deconnexionLink');

deconnexionButton.addEventListener('click', () => {
    localStorage.removeItem('userIsConnected')
})

sideBarIcon.addEventListener('click', () => {
    if (sideBar.style.display === "block") {
        sideBar.style.display = "none"
    } else {
        sideBar.style.display = "block"
    }

})
