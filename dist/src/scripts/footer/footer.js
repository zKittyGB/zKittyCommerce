// Fonction to scroll at the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // To scroll slowly
  });
}

// Fonction to display the footer
function displayFooter() {
  const footerList = document.querySelector(".footerList");
  const ulFooter = document.createElement("ul");
  const liWhoAreWe = document.createElement("li");
  const liSell = document.createElement("li");
  const liGiftCard = document.createElement("li");
  const liReturnProduct = document.createElement("li");
  ulFooter.setAttribute("class", "ulFooter");
  liWhoAreWe.textContent = "À propos de zKittyCommerce";
  liSell.textContent = "Vendre sur zKittyCommerce";
  liGiftCard.textContent = "Cartes cadeaux";
  liReturnProduct.textContent = "Retours et remplacements";
  footerList.appendChild(ulFooter);
  ulFooter.appendChild(liWhoAreWe);
  ulFooter.appendChild(liSell);
  ulFooter.appendChild(liGiftCard);
  ulFooter.appendChild(liReturnProduct);
}
displayFooter();
