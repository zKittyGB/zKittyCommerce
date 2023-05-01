const deliveryUserInfo = document.querySelector(".deliveryUserInfo");
const adressModal = document.querySelector(".adress-modal");

//open the modal
deliveryUserInfo.addEventListener("click", () => {
  adressModal.style.display = "flex";
});

//close the modal
window.addEventListener("click", (event) => {
  if (event.target == adressModal) {
    adressModal.style.display = "none";
  }
});
