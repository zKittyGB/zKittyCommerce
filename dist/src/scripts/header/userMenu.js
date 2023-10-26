import store from "../store/ConfigureStore.js";

function displayUserMenu() {
  /*function that create the display of the research area */
  const state = store.getState();
  const headerTopSection = document.querySelector(".headerTopSection");
  const aUserMenu = document.createElement("a");
  const divUserMenu = document.createElement("div");
  const pUserName = document.createElement("p");
  const divTitleMenu = document.createElement("div");
  const pTitleMenu = document.createElement("p");
  const emMenu = document.createElement("em");
  aUserMenu.setAttribute("class", "aUserMenu");
  aUserMenu.href = "./pages/login.html";
  divUserMenu.setAttribute("class", "userMenu");
  pUserName.setAttribute("class", "pUserName");
  if (state.isLogged === true) {
    pUserName.textContent = `Bonjour ${state.user.firstName}`;
  } else {
    pUserName.textContent = "Bonjour, identifiez-vous";
    pTitleMenu.style.marginLeft = "10px";
  }
  divTitleMenu.setAttribute("class", "titleMenu");
  pTitleMenu.setAttribute("class", "pTitleMenu ");
  pTitleMenu.textContent = "Compte et listes";
  emMenu.setAttribute("class", "arrowDownUserMenu fa-solid fa-caret-down");
  headerTopSection.appendChild(aUserMenu);
  aUserMenu.appendChild(divUserMenu);
  divUserMenu.appendChild(pUserName);

  divUserMenu.appendChild(divTitleMenu);
  divTitleMenu.appendChild(pTitleMenu);
  divTitleMenu.appendChild(emMenu);
}
displayUserMenu();
