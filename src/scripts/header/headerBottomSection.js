function displayProductMenu() {
  /*function that create the display of the product Menu */
  const divProductMenu = document.querySelector(".headerBottomSection");
  const divPromo = document.createElement("div");
  const pPromo = document.createElement("p");
  const divTopSell = document.createElement("div");
  const pTopSell = document.createElement("p");
  const divBuyAgain = document.createElement("div");
  const pBuyAgain = document.createElement("p");
  const divFreeDelivery = document.createElement("div");
  const pFreeDelivery = document.createElement("p");
  const divGiftCard = document.createElement("div");
  const pGiftCard = document.createElement("p");
  const divSeller = document.createElement("div");
  const pSeller = document.createElement("p");
  //Create promo area
  divPromo.setAttribute("class", "promoProductMenu");
  pPromo.setAttribute("class", "pPromo");
  pPromo.textContent = "Promos";
  //Create top sell area
  divTopSell.setAttribute("class", "topSellProductMenu");
  pTopSell.setAttribute("class", "pTopSell");
  pTopSell.textContent = "Top des ventes";
  //Create Buy again area
  divBuyAgain.setAttribute("class", "buyAgainProductMenu");
  pBuyAgain.setAttribute("class", "pBuyAgain");
  pBuyAgain.textContent = "Acheter à nouveau";
  //Create free delivery area
  divFreeDelivery.setAttribute("class", "freeDeliveryProductMenu");
  pFreeDelivery.setAttribute("class", "pFreeDelivery");
  pFreeDelivery.textContent = "Livraison gratuite";
  //Create gift card area
  divGiftCard.setAttribute("class", "giftCardProductMenu");
  pGiftCard.setAttribute("class", "pGiftCard");
  pGiftCard.textContent = "Cartes cadeaux";
  //Create seller area
  divSeller.setAttribute("class", "sellerProductMenu");
  pSeller.setAttribute("class", "pSeller");
  pSeller.textContent = "Vendre sur zKittyCommerce";
  //link above element to each other
  divProductMenu.appendChild(divPromo);
  divPromo.appendChild(pPromo);
  divProductMenu.appendChild(divTopSell);
  divTopSell.appendChild(pTopSell);
  divProductMenu.appendChild(divBuyAgain);
  divBuyAgain.appendChild(pBuyAgain);
  divProductMenu.appendChild(divFreeDelivery);
  divFreeDelivery.appendChild(pFreeDelivery);
  divProductMenu.appendChild(divGiftCard);
  divGiftCard.appendChild(pGiftCard);
  divProductMenu.appendChild(divSeller);
  divSeller.appendChild(pSeller);
}
displayProductMenu();
