import store from "../store/ConfigureStore.js";

function setLoginInState() {
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  function catchLogin(event) {
    //function that catch and stock email / password values
    store.dispatch({
      type: `set${
        event.target.id.charAt(0).toUpperCase() +
        event.target.id.slice(1).toLowerCase()
      }InState`,
      payload: event.target.value,
    });
  }
  email.addEventListener("keyup", catchLogin);
  password.addEventListener("keyup", catchLogin);
}
setLoginInState();
