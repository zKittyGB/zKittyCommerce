import store from "./scripts/store/ConfigureStore.js";
import userInfo from "./scripts/header/deliveryUserInfo.js";
import researchArea from "./scripts/header/researchArea.js";
import userMenu from "./scripts/header/userMenu.js";
import returnAndOrder from "./scripts/header/returnAndOrder.js";
import basket from "./scripts/header/basket.js";
import headerBottomSection from "./scripts/header/headerBottomSection.js";
import adressModal from "./scripts/header/features/adressModal/adressModal.js";
import openAdressModal from "./scripts/header/features/adressModal/openAdressModal.js";
import userMenuModal from "./scripts/header/features/userMenuModal/userMenuModal.js";
import openUserMenuModal from "./scripts/header/features/userMenuModal/openUserMenuModal.js";
import carrousel from "./scripts/home_main/carrousel.js";
import homeCard from "./scripts/home_main/homeCard.js";
import footer from "./scripts/footer/footer.js";

const state = store.getState();
console.log(state);

store.subscribe(() => {
  // Abonnez-vous aux changements du store
  const updatedState = store.getState();
  console.log(updatedState);
});

function redirectLoginButton() {
  const state = store.getState();
  if (state.isLogged === true) {
    const aUserMenu = document.querySelector(".aUserMenu");
    aUserMenu.href = "index.html";
  }
}
redirectLoginButton();
