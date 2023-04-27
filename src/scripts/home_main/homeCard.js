//function that display the first card area
function displayTopCardArea() {
  const cardResume = document.querySelector(".cardResume");
  const cardTopSell = document.querySelector(".cardTopSell");
  const cardBuyAgain = document.querySelector(".cardBuyAgain");
  const cardFreeDelivery = document.querySelector(".cardFreeDelivery");
  const h1Resume = document.createElement("h1");
  const h1TopSell = document.createElement("h1");
  const h1BuyAgain = document.createElement("h1");
  const h1FreeDelivery = document.createElement("h1");
  const cardResumeBody = document.createElement("div");
  const cardTopSellBody = document.createElement("div");
  const cardBuyAgainBody = document.createElement("div");
  const cardFreeDeliveryBody = document.createElement("div");
  h1Resume.setAttribute("class", "cardH1");
  h1Resume.textContent = "Reprendre où vous en étiez";
  h1TopSell.setAttribute("class", "cardH1");
  h1TopSell.textContent = "Meilleures ventes";
  h1BuyAgain.setAttribute("class", "cardH1");
  h1BuyAgain.textContent = "Acheter à nouveau";
  h1FreeDelivery.setAttribute("class", "cardH1");
  h1FreeDelivery.textContent = "Articles en livraison gratuite";
  cardResumeBody.setAttribute("class", "cardResumeBody");
  cardTopSellBody.setAttribute("class", "cardTopSellBody");
  cardBuyAgainBody.setAttribute("class", "cardBuyAgainBody");
  cardFreeDeliveryBody.setAttribute("class", "cardFreeDeliveryBody");
  cardResume.appendChild(h1Resume);
  cardTopSell.appendChild(h1TopSell);
  cardBuyAgain.appendChild(h1BuyAgain);
  cardFreeDelivery.appendChild(h1FreeDelivery);
  cardResume.appendChild(cardResumeBody);
  cardTopSell.appendChild(cardTopSellBody);
  cardBuyAgain.appendChild(cardBuyAgainBody);
  cardFreeDelivery.appendChild(cardFreeDeliveryBody);
}
displayTopCardArea();

//function that display the second card area
function displayBottomCardArea() {
  const cardRSE = document.querySelector(".cardRSE");
  const cardFrenchMerchandise = document.querySelector(
    ".cardFrenchMerchandise"
  );
  const cardPromo = document.querySelector(".cardPromo");
  const h1CardRSE = document.createElement("h1");
  const h1CardFrenchMerchandise = document.createElement("h1");
  const h1CardPromo = document.createElement("h1");
  const cardRSEBody = document.createElement("div");
  const cardFrenchMerchandiseBody = document.createElement("div");
  const cardPromoBody = document.createElement("div");
  h1CardRSE.setAttribute("class", "cardH1");
  h1CardRSE.textContent = "Nos engagement RSE";
  h1CardFrenchMerchandise.setAttribute("class", "cardH1");
  h1CardFrenchMerchandise.textContent = "Produits fabriqué en France";
  h1CardPromo.setAttribute("class", "cardH1");
  h1CardPromo.textContent = "Nos promotions";
  cardRSEBody.setAttribute("class", "cardRSEBody");
  cardFrenchMerchandiseBody.setAttribute("class", "cardFrenchMerchandiseBody");
  cardPromoBody.setAttribute("class", "cardPromoBody");
  cardRSE.appendChild(h1CardRSE);
  cardFrenchMerchandise.appendChild(h1CardFrenchMerchandise);
  cardPromo.appendChild(h1CardPromo);
  cardRSE.appendChild(cardRSEBody);
  cardFrenchMerchandise.appendChild(cardFrenchMerchandiseBody);
  cardPromo.appendChild(cardPromoBody);
}
displayBottomCardArea();
