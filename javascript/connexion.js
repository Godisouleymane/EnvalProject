
let tentatives = 3;
let emailInput = document.getElementById('input-mail');
let passwordInput = document.getElementById('input-password');
let cardNotification = document.querySelector('.card-notification');
let buttonConnexion = document.getElementById('button-connexion')
let compteARebours = null;
let reponseQuestionSecrete;


function notification (element, titre, message) {
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

// Enregistrement des données des utilisateurs dans le localStorage
let data = [
    {
      "email": "ssabiougodi@gmail.com",
      "password": "mot de passe",
      "reponseQuestionSecrete": "Nueve",
    },
  ];
  localStorage.setItem("users", JSON.stringify(data));
 
// Vérifier si les champs sont vides
buttonConnexion.addEventListener('click', function () {
    let email = emailInput.value;
    let password = passwordInput.value;
  
    if (email.trim() === '' || password.trim() === '') {
      notification(cardNotification, "Alert", "Veuillez remplir tous les champs.")
      return;
    }
  
    // Récupérer les données de l'utilisateur depuis le localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Vérifier les données de l'utilisateur
    let user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      // Rediriger vers la page d'accueil
        window.location.href = "dashboard.html"
    } else {
      tentatives--;
  
      if (tentatives === 0) {
        notification(cardNotification, "Alert", "Votre compte est temporairement bloqué.");
        setTimeout(function () {
          let reponse = prompt("Quel est le surnom de Souleymane ?");
          if (reponse === "Nueve") {
            window.location.href = "dashboard.html"
          } else {
            notification(cardNotification, "Alert", "Votre compte est définitivement bloqué.")
          }
        }, 1000); // Attente de 5 secondes avant de poser la question
      } else {
        notification(cardNotification, "Alert", `Données incorrectes. Il vous reste ${tentatives} tentatives.`)
      }
    }
  });