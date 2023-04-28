import store from "./scripts/store/ConfigureStore.js";
import carrousel from "./scripts/home_main/carrousel.js";
import homeCard from "./scripts/home_main/homeCard.js";
import basket from "./scripts/header/basket.js";
import userInfo from "./scripts/header/deliveryUserInfo.js";
import headerBottomSection from "./scripts/header/headerBottomSection.js";
import researchArea from "./scripts/header/researchArea.js";
import returnAndOrder from "./scripts/header/returnAndOrder.js";
import userMenu from "./scripts/header/userMenu.js";
const state = store.getState();
console.log(state);

store.subscribe(() => {
  // Abonnez-vous aux changements du store
  const updatedState = store.getState();
  console.log(updatedState);
});
