function displayReturnAndOrder() {
  /*function that create the display of return Order and the display of orders */
  const headerTopSection = document.querySelector(".headerTopSection");
  const divReturnAndOrder = document.createElement("div");
  const pReturn = document.createElement("p");
  const pOrder = document.createElement("p");
  divReturnAndOrder.setAttribute("class", "returnAndOrder");
  pReturn.setAttribute("class", "pReturn");
  pReturn.textContent = "Retours";
  pOrder.setAttribute("class", "pOrder");
  pOrder.textContent = "et commandes";
  headerTopSection.appendChild(divReturnAndOrder);
  divReturnAndOrder.appendChild(pReturn);
  divReturnAndOrder.appendChild(pOrder);
}
displayReturnAndOrder();
