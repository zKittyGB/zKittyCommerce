function createUserMenuModal() {
  const headerBottomSection = document.querySelector(".headerBottomSection");
  const divUserMenuModal = document.createElement("div");
  const divListUserMenuModal = document.createElement("div");
  const divTitleList = document.createElement("div");
  const h1TitleList = document.createElement("h1");
  const pTitleList = document.createElement("p");
  const bodyListUserMenuModal = document.createElement("div");
  const divAccountUserMenuModal = document.createElement("div");
  divUserMenuModal.setAttribute("class", "userMenuModal");
  divListUserMenuModal.setAttribute("class", "listUserMenuModal");
  divTitleList.setAttribute("class", "titleListUserMenuModal");
  divAccountUserMenuModal.setAttribute("class", "accountUserMenuModal");
  h1TitleList.textContent = "Vos listes d'envies";
  pTitleList.textContent = "Listes d'envies";
  headerBottomSection.appendChild(divUserMenuModal);
  divUserMenuModal.appendChild(divListUserMenuModal);
  divListUserMenuModal.appendChild(divTitleList);
  divTitleList.appendChild(h1TitleList);
  divTitleList.appendChild(pTitleList);
  divUserMenuModal.appendChild(divAccountUserMenuModal);
}

createUserMenuModal();
