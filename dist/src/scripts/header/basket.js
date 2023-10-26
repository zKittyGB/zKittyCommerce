import store from "../store/ConfigureStore.js";

function displayBasket() {
  /*function that create the display of user's basket */
  const state = store.getState();
  const headerTopSection = document.querySelector(".headerTopSection");
  const divBasket = document.createElement("div");
  const numberItem = document.createElement("p");
  const textBasket = document.createElement("p");
  divBasket.setAttribute("class", "basket");
  numberItem.setAttribute("class", "numberOfItemBasket");
  numberItem.textContent = `${state.itemInBasket}`;
  textBasket.setAttribute("class", "textBasket");
  textBasket.textContent = "Panier";
  headerTopSection.appendChild(divBasket);
  divBasket.appendChild(numberItem);
  divBasket.appendChild(textBasket);
}
displayBasket();
