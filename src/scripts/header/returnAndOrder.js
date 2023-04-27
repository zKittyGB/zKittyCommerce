function displayReturnAndOrder() {
  /*function that create the display of return Order and the display of orders */
  const divReturnAndOrder = document.querySelector(".returnAndOrder");
  const pReturn = document.createElement("p");
  const pOrder = document.createElement("p");
  pReturn.setAttribute("class", "pReturn");
  pReturn.textContent = "Retours";
  pOrder.setAttribute("class", "pOrder");
  pOrder.textContent = "et commandes";
  divReturnAndOrder.appendChild(pReturn);
  divReturnAndOrder.appendChild(pOrder);
}
displayReturnAndOrder();
