import store from "../scripts/store/ConfigureStore.js";
import login from "../scripts/login_main/loginForm.js";
import loginInState from "../scripts/login_main/setLoginInState.js";

store.subscribe(() => {
  // Abonnez-vous aux changements du store
  const updatedState = store.getState();
  console.log(updatedState);
});
