
let tentatives = 3;
const emailInput = document.getElementById('input-mail');
const passwordInput = document.getElementById('input-password');
const cardNotification = document.querySelector('.card-notification');
const buttonConnexion = document.getElementById('button-connexion');
const editPassword = document.getElementById('edit-password');
const cardPassword = document.querySelector('.card-password')
const sendButtonPassword = document.querySelector('.send-button-password');
const oldPasswordInput = document.getElementById('old-password');
const newPasswordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const closeIcon = document.getElementById('close-icon');

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
      userName: "Souleymane",
      password: "mot de passe",
     
    },

    {
      userName: "Sabiou",
      password:"mot de passe2"
    },
    
    {
      userName: "Godi",
      password:"mot de passe3"
    }
  ];
   // Récupérer les données de l'utilisateur depuis le localStorage
   let users = JSON.parse(localStorage.getItem("users")) || [];

  
  if (users == false) {
    localStorage.setItem("users", JSON.stringify(data));
  }
 
// Vérifier si les champs sont vides

function connectionButton() {
  
  let identifiant = emailInput.value;
  let password = passwordInput.value;

  if (identifiant.trim() === '' || password.trim() === '') {
    notification(cardNotification, "Connexion", "Veuillez remplir tous les champs.");
    return;
  }

  // Vérifier les données de l'utilisateur
  let user = users.find(u => u.userName === identifiant && u.password === password);

  if (user) {
    // Rediriger vers la page d'accueil
      window.location.href = "dashboard.html";
      let userConnecter = user;
      localStorage.setItem('userIsConnected', JSON.stringify(userConnecter));
  } else {
    tentatives--;

    if (tentatives === 0) {
      notification(cardNotification, "Compte bloque", "Oups!!! Votre compte est temporairement bloqué.");
      setTimeout(function () {
        let reponse = prompt("Quel est le surnom de Souleymane ?");
        if (reponse === "Nueve") {
          window.location.href = "dashboard.html"
        } else {
          notification(cardNotification, "Alert", "Votre compte est définitivement bloqué.")
        }
      }, 3000); // Attente de 3 secondes avant de poser la question
    } else {
      notification(cardNotification, "Alert", `Données incorrectes. Il vous reste ${tentatives} tentatives.`)
    }
  }

}



function editPasswordFunction() {
  cardPassword.classList.remove('hidden');
}



const arrayOfUsers = JSON.parse(localStorage.getItem('users'));
const getPassword = JSON.parse(localStorage.getItem('userIsConnected'));

function sendButtonPasswordFunction() {
  if (getPassword.password === oldPasswordInput.value && newPasswordInput.value === confirmPasswordInput.value) {
    const arrayUsers = arrayOfUsers.map(item => {
      if (item.password === getPassword.password) {
        item.password = confirmPasswordInput.value
      }
      return item

    })
    localStorage.setItem('users', JSON.stringify(arrayUsers))
    notification(cardNotification, "Modification du mot de passe", "Mot de passe modifié avec succes");
    setTimeout(() => {
      window.location.href = 'connexion.html'
    }, 2000);
  } else if (confirmPasswordInput.value !== newPasswordInput.value) {
    notification(cardNotification, "Echec de confirmation", "Le nouveau et la confirmation du mot de passe doivent etre identique")
  }
   else {
    notification(cardNotification, "Modification du mot de passe", "Echec de la modification du mot de passe")
  }  
}

function closeIconFunction() {
  cardPassword.classList.add('hidden');
  notification(cardNotification, "Modification du mot de passe", "La modification a été anullée")
}

