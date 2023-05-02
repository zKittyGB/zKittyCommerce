import store from "../../../store/ConfigureStore.js";

const userMenu = document.querySelector(".userMenu");
const modalUserMenu = document.querySelector(".userMenuModal");
const modalUserMenuContent = document.querySelector(".userMenuModal-content");
let captorCreated;
function createCaptor() {
  //function that create a captor on .userMenu (fix an uX bug)
  const captor = document.createElement("div");
  captor.style.width = "100%";
  captor.style.height = "100%";
  captor.style.position = "absolute";
  captor.style.zIndex = "4";
  userMenu.appendChild(captor);
  return (captorCreated = captor);
}
createCaptor();

const state = store.getState();
if (state.isLogged === true) {
  captorCreated.addEventListener("mouseover", () => {
    modalUserMenu.style.display = "block"; // show modal
  });

  modalUserMenuContent.addEventListener("mouseover", () => {
    modalUserMenu.style.display = "block"; // show modal
  });

  captorCreated.addEventListener("mouseout", () => {
    if (!modalUserMenuContent.matches(":hover")) {
      // si a n'est pas survolé
      modalUserMenu.style.display = "none"; // hide modal
    }
  });

  modalUserMenuContent.addEventListener("mouseout", () => {
    if (!captorCreated.matches(":hover")) {
      // si a n'est pas survolé
      modalUserMenu.style.display = "none"; // hide modal
    }
  });
}
