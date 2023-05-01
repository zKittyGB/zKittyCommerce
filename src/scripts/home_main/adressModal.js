import store from "../store/ConfigureStore.js";

function updateAdressModal() {
  const adressModalBody = document.querySelector(".adress-modal-content-body");
  const adressModalButton = document.querySelector(
    ".adress-modal-content-body-button"
  );
  const state = store.getState();

  if (state.isLogged === true) {
    //delete the first element of the modal while a first element exist
    while (adressModalBody.firstChild) {
      adressModalBody.removeChild(adressModalBody.firstChild);
    }
    //Call the logged adressModal body
    loggedBodyModal();
  }
}
updateAdressModal();

function loggedBodyModal() {
  //function that create the content of a logged user
  const state = store.getState();
  const stateAdress = state.user.adress;
  const adressModalContent = document.querySelector(".adress-modal-content");
  const adressModalBody = document.querySelector(".adress-modal-content-body");
  const pSelectAdress = document.createElement("p");
  const divAdress = document.createElement("div");
  const divNameStreet = document.createElement("div");
  const nameAdress = document.createElement("p");
  const streetAdress = document.createElement("p");
  const cityAdress = document.createElement("p");
  const zipAdress = document.createElement("p");
  const pManageAdress = document.createElement("p");
  const aManageAdress = document.createElement("a");
  const divSelectZip = document.createElement("div");
  const lineSelectZip = document.createElement("div");
  const pSelectZip = document.createElement("p");
  adressModalContent.style.height = "auto";
  divNameStreet.setAttribute(
    "class",
    "adress-modal-content-body-adress-nameStreet"
  );
  divNameStreet.style.marginTop = "5px";
  nameAdress.style.fontWeight = "bold";
  pSelectAdress.textContent =
    "Sélectionnez votre lieu de livraison pour voir les options de livraison";
  adressModalBody.appendChild(pSelectAdress);
  //call the adress card
  cardAdressCreator();
  aManageAdress.href = "./index.html";
  pManageAdress.textContent = "Gérez vos adresses de livraison";
  divSelectZip.setAttribute(
    "class",
    "adress-modal-content-body-adress-divSelectZip"
  );
  lineSelectZip.setAttribute(
    "class",
    "adress-modal-content-body-adress-lineSelectZip"
  );
  pSelectZip.textContent = "ou entrez un code postal en France métropolitaine";
  pSelectZip.style.fontSize = "12px";
  pSelectZip.style.textAlign = "center";
  adressModalBody.appendChild(aManageAdress);
  aManageAdress.appendChild(pManageAdress);
  adressModalBody.appendChild(divSelectZip);
  divSelectZip.appendChild(lineSelectZip);
  divSelectZip.appendChild(pSelectZip);
  //call the input Zip select function
  inputZipSelect();
}

function cardAdressCreator() {
  //function that create the body card of the adress
  const state = store.getState();
  const stateAdress = state.user.adress;
  const adressModalBody = document.querySelector(".adress-modal-content-body");
  const divAdress = document.createElement("div");
  const divNameStreet = document.createElement("div");
  const nameAdress = document.createElement("p");
  const streetAdress = document.createElement("p");
  const cityAdress = document.createElement("p");
  const zipAdress = document.createElement("p");
  divAdress.setAttribute("class", "adress-modal-content-body-adress");
  nameAdress.setAttribute("class", "adress-modal-content-body-adress-name");
  nameAdress.textContent = state.user.firstName + " " + state.user.lastName;
  streetAdress.textContent = stateAdress.street;
  cityAdress.textContent = stateAdress.city;
  zipAdress.textContent = stateAdress.zip;
  adressModalBody.appendChild(divAdress);
  divAdress.appendChild(divNameStreet);
  divNameStreet.appendChild(nameAdress);
  divNameStreet.appendChild(streetAdress);
  divAdress.appendChild(cityAdress);
  divAdress.appendChild(zipAdress);
}

function inputZipSelect() {
  const adressModalBody = document.querySelector(".adress-modal-content-body");
  const divInputZipSelect = document.createElement("div");
  const inputZipSelect = document.createElement("input");
  const buttonSubmitZipSelect = document.createElement("button");
  function handleClick() {
    //function that catch and stock new ZipCode
    store.dispatch({
      type: "setZipAdressFromModal",
      payload: inputZipSelect.value,
    });
    localStorage.setItem("state", JSON.stringify(store.getState())); // save the state in localStorage
    location.reload();
  }
  divInputZipSelect.setAttribute(
    "class",
    "adress-modal-content-body-divInputZipSelect"
  );
  inputZipSelect.setAttribute(
    "class",
    "adress-modal-content-body-inputZipSelect"
  );
  inputZipSelect.setAttribute("maxlength", "5");
  inputZipSelect.setAttribute("pattern", "[0-9]{5}");
  buttonSubmitZipSelect.setAttribute(
    "class",
    "adress-modal-content-body-buttonSubmitZipSelect"
  );
  buttonSubmitZipSelect.textContent = "Actualiser";
  buttonSubmitZipSelect.addEventListener("click", handleClick);
  adressModalBody.appendChild(divInputZipSelect);
  adressModalBody.appendChild(divInputZipSelect);
  divInputZipSelect.appendChild(inputZipSelect);
  divInputZipSelect.appendChild(buttonSubmitZipSelect);
}
