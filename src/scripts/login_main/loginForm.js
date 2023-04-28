import store from "../store/ConfigureStore.js";
let userJson;

async function chargerDonneesJSON() {
  //function that fetch the user data from user.json
  try {
    const response = await fetch("../../src/data/user.json");
    userJson = await response.json();
    return userJson;
  } catch (error) {
    console.error(error);
    return null;
  }
}
chargerDonneesJSON();

function displayLoginForm() {
  // function that create the display of the research area
  const loginForm = document.querySelector(".signInForm");
  const buttonSubmitEmail = document.createElement("button");
  const buttonSubmitPassword = document.createElement("button");
  const pForm = document.createElement("p");
  const emailInput = document.querySelector("#email");
  const emailLabel = document.querySelector(".email");
  const passwordInput = document.querySelector("#password");
  const passwordLabel = document.querySelector(".password");
  const errorID = document.querySelector(".errorID");
  const pErrorID = document.querySelector(".pErrorID");
  let user = "";
  emailInput.setAttribute("required", "");
  buttonSubmitEmail.setAttribute("class", "submitSignInEmail");
  buttonSubmitEmail.innerText = "Se connecter";
  buttonSubmitEmail.addEventListener("click", checkValidateMail);
  buttonSubmitPassword.setAttribute("class", "submitSignInPassword");
  buttonSubmitPassword.innerText = "Se connecter";
  buttonSubmitPassword.addEventListener("click", checkValidatePassword);
  buttonSubmitPassword.style.display = "none";
  pForm.textContent = `En passant votre commande, vous acceptez les Conditions générales de
  vente d’Amazon. Veuillez consulter notre Notice Protection de vos
  informations personnelles, notre Notice Cookies et notre Notice
  Annonces publicitaires basées sur vos centres d’intérêt.`;
  loginForm.appendChild(buttonSubmitEmail);
  loginForm.appendChild(buttonSubmitPassword);
  loginForm.appendChild(pForm);
  function checkValidateMail(e) {
    // function that search for a match between the value of state.login.email in userJson
    e.preventDefault();
    const state = store.getState();
    let emailFound = false;
    for (let i = 0; i < userJson.length; i++) {
      if (userJson[i].mail === state.login.email) {
        emailFound = true;
        user = userJson[i];
        break;
      }
    }
    if (emailFound) {
      emailInput.removeAttribute("required");
      emailInput.style.display = "none";
      emailLabel.style.display = "none";
      passwordInput.style.display = "block";
      passwordLabel.style.display = "block";
      errorID.style.display = "none";
      buttonSubmitEmail.style.display = "none";
      pForm.style.display = "none";
      buttonSubmitPassword.style.display = "block";
    } else {
      errorID.style.display = "flex";
      pErrorID.textContent =
        "Impossible de trouver un compte correspondant à cette adresse e-mail";
    }
    console.log(user);
  }
  function checkValidatePassword(e) {
    e.preventDefault();
    const state = store.getState();
    if (user.password === state.login.password) {
      store.dispatch({ type: "setIsLogged" });
      store.dispatch({
        type: "setUserData",
        payload: {
          firstName: user.prenom,
          lastName: user.nom,
          age: user.age,
          adress: user.adresse,
        },
      }),
        localStorage.setItem("state", JSON.stringify(store.getState())); // save the state in localStorage
      window.location.href = "../index.html";
    } else {
      const emAlert = document.querySelector(".fa-triangle-exclamation");
      emAlert.style.marginTop = "-30px";
      errorID.style.display = "flex";
      pErrorID.textContent = "Votre mot de passe est incorrect";
    }
  }
}

displayLoginForm();
