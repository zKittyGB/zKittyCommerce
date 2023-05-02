import store from "../store/ConfigureStore.js";

function displayDeliveryUserInfo() {
  /*function that create the display of user delivery info */
  const state = store.getState();
  const headerTopSection = document.querySelector(".headerTopSection");
  const divDeliveryUserInfo = document.createElement("div");
  const pDeliveryTo = document.createElement("p");
  const divAdress = document.createElement("div");
  const pAdress = document.createElement("p");
  const emAdress = document.createElement("em");
  pDeliveryTo.setAttribute("class", "deliveryTo");
  divDeliveryUserInfo.setAttribute("class", "deliveryUserInfo");
  pAdress.setAttribute("class", "pAdress");
  divAdress.setAttribute("class", "adressArea");
  if (state.isLogged === true) {
    pDeliveryTo.textContent = `Livré à ${state.user.firstName}`;
    if (state.user.adress.zip === state.user.zipShown) {
      pAdress.textContent = `${state.user.adress.city} ${state.user.zipShown}`;
    } else {
      pAdress.textContent = `${state.user.zipShown}`;
    }
  } else {
    pDeliveryTo.textContent = "Bonjour";
    pAdress.textContent = "Entrez votre adresse";
  }
  emAdress.setAttribute("class", "emAdress fa-solid fa-location-dot");
  headerTopSection.appendChild(divDeliveryUserInfo);
  divDeliveryUserInfo.appendChild(pDeliveryTo);
  divDeliveryUserInfo.appendChild(divAdress);
  divAdress.appendChild(emAdress);
  divAdress.appendChild(pAdress);
}
displayDeliveryUserInfo();
