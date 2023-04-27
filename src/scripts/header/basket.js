import store from "../store/ConfigureStore.js";

function displayBasket() {
  /*function that create the display of user's basket */
  const state = store.getState();
  const divBasket = document.querySelector(".basket");
  const numberItem = document.createElement("p");
  const textBasket = document.createElement("p");
  numberItem.setAttribute("class", "numberOfItemBasket");
  numberItem.textContent = `${state.itemInBasket}`;
  textBasket.setAttribute("class", "textBasket");
  textBasket.textContent = "Panier";
  divBasket.appendChild(numberItem);
  divBasket.appendChild(textBasket);
}
displayBasket();
