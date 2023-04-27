import store from "../store/ConfigureStore.js";

function displayUserMenu() {
  /*function that create the display of the research area */
  const state = store.getState();
  const divUserMenu = document.querySelector(".userMenu");
  const pUserName = document.createElement("p");
  const divTitleMenu = document.createElement("div");
  const pTitleMenu = document.createElement("p");
  const emMenu = document.createElement("em");
  pUserName.setAttribute("class", "pUserName");
  if (state.isLogged === true) {
    pUserName.textContent = `Bonjour ${state.user.firstName}`;
  } else {
    pUserName.textContent = "Bonjour, identifiez-vous";
    pTitleMenu.style.marginLeft = "10px";
  }
  divTitleMenu.setAttribute("class", "titleMenu");
  pTitleMenu.setAttribute("class", "pTitleMenu");
  pTitleMenu.textContent = "Compte et listes";
  emMenu.setAttribute("class", "arrowDownUserMenu fa-solid fa-caret-down");
  divUserMenu.appendChild(pUserName);
  divUserMenu.appendChild(divTitleMenu);
  divTitleMenu.appendChild(pTitleMenu);
  divTitleMenu.appendChild(emMenu);
}
displayUserMenu();
