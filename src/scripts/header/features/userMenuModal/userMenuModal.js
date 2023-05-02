import store from "../../../store/ConfigureStore.js";

function createUserMenuModal() {
  //Function that create the display of the user menu
  const state = store.getState();
  if (state.isLogged === true) {
    const headerBottomSection = document.querySelector(".headerBottomSection");
    const divUserMenuModal = document.createElement("div");
    const divUserMenuModalContent = document.createElement("div");
    const emUserMenuModalContent = document.createElement("em");
    const divListUserMenuModal = document.createElement("div");
    const divTitleList = document.createElement("div");
    const h1TitleList = document.createElement("h1");
    const pTitleList = document.createElement("p");
    const divBodyList = document.createElement("div");
    const ulBodyList = document.createElement("ul");
    const ulAccountList = document.createElement("ul");
    const divAccountUserMenuModal = document.createElement("div");
    const divBuyAgainUserMenuModal = document.createElement("div");
    const h1BuyAgain = document.createElement("h1");
    const h1AccountList = document.createElement("h1");
    const imgAccount = document.createElement("img");
    //Set attribute and parameters of the modal
    emUserMenuModalContent.setAttribute("class", "fa-solid fa-caret-up fa-2xl");
    divUserMenuModalContent.setAttribute("class", "userMenuModal-content");
    divUserMenuModal.setAttribute("class", "userMenuModal");
    divListUserMenuModal.setAttribute("class", "listUserMenuModal");
    divTitleList.setAttribute("class", "titleListUserMenuModal");
    divAccountUserMenuModal.setAttribute("class", "accountUserMenuModal");
    divBuyAgainUserMenuModal.setAttribute("class", "buyAgainUserMenuModal");
    ulBodyList.setAttribute("class", "ulBodyListUserMenuModal");
    ulAccountList.setAttribute("class", "ulAccountListUserMenuModal");
    imgAccount.setAttribute("class", "logoMenuModal");
    h1TitleList.textContent = "Vos listes d'envies";
    pTitleList.textContent = "Listes d'envies";
    h1BuyAgain.textContent = "Acheter à nouveau";
    h1AccountList.textContent = "Votre compte";
    imgAccount.src = "../../../../src/assets/images/logo_big.png";
    //link elements of the modal
    headerBottomSection.appendChild(divUserMenuModal);
    divUserMenuModal.appendChild(divUserMenuModalContent);
    divUserMenuModalContent.appendChild(emUserMenuModalContent);
    divUserMenuModalContent.appendChild(divBuyAgainUserMenuModal);
    divBuyAgainUserMenuModal.appendChild(h1BuyAgain);
    divUserMenuModalContent.appendChild(divListUserMenuModal);
    divListUserMenuModal.appendChild(divTitleList);
    divTitleList.appendChild(h1TitleList);
    divTitleList.appendChild(pTitleList);
    divListUserMenuModal.appendChild(divBodyList);
    divBodyList.appendChild(ulBodyList);
    //call the wish list of the modal
    displayUserWishList(ulBodyList);
    divUserMenuModalContent.appendChild(divAccountUserMenuModal);
    divAccountUserMenuModal.appendChild(h1AccountList);
    divAccountUserMenuModal.appendChild(ulAccountList);
    //Call the settings menu
    displayUserAccountSettings(ulAccountList);
    divUserMenuModalContent.appendChild(imgAccount);
  }
}

createUserMenuModal();

function displayUserWishList(ulBodyList) {
  //Function that create the display of the user wish List
  const state = store.getState();
  const userWishList = state.user.wishList;
  for (let i = 0; i <= userWishList.length - 1; i++) {
    const aBodyList = document.createElement("a");
    const liBodyList = document.createElement("li");
    aBodyList.setAttribute("class", `modalWishList modalWishList-${i}`);
    aBodyList.href = "wishList.html";
    liBodyList.textContent = userWishList[i];
    ulBodyList.appendChild(aBodyList);
    aBodyList.appendChild(liBodyList);
  }
}

function displayUserAccountSettings(ulAccountList) {
  //Function that create the display of the user account settings
  const accountList = {
    account: "Votre compte",
    orders: "Vos commandes",
    wishList: "Votre liste d'envies",
    delivery: "Vos livraisons Programmées",
    disconnect: "Déconnexion",
  };
  //create li for each key in accountList
  for (let key in accountList) {
    const aAccountList = document.createElement("a");
    const liAccountList = document.createElement("li");
    aAccountList.setAttribute("class", ``);
    aAccountList.href = `./${key}.html`;
    liAccountList.textContent = accountList[key];
    ulAccountList.appendChild(aAccountList);
    aAccountList.appendChild(liAccountList);
  }
}
