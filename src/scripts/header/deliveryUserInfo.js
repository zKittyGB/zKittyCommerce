import store from "../store/ConfigureStore.js";

function displayDeliveryUserInfo() {
  const state = store.getState();
  /*function that create the display of user delivery info */
  const divDeliveryUserInfo = document.querySelector(".deliveryUserInfo");
  const pDeliveryTo = document.createElement("p");
  const pAdress = document.createElement("p");
  const emAdress = document.createElement("em");
  pDeliveryTo.setAttribute("class", "deliveryTo");
  pAdress.setAttribute("class", "adress");
  if (state.isLogged === true) {
    pDeliveryTo.textContent = `Livré à ${state.user.firstName}`;
    pAdress.textContent = `${state.user.adress}`;
    emAdress.style.marginLeft = "-110px";
  } else {
    pDeliveryTo.textContent = "Bonjour";
    pAdress.textContent = "Entrez votre adresse";
    emAdress.style.marginLeft = "-155px";
  }
  emAdress.setAttribute("class", "emAdress fa-solid fa-location-dot");
  divDeliveryUserInfo.appendChild(pDeliveryTo);
  divDeliveryUserInfo.appendChild(pAdress);
  divDeliveryUserInfo.appendChild(emAdress);
}

displayDeliveryUserInfo();
