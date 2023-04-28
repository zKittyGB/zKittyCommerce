import { createStore } from "redux";

// get state in localStorage
const savedState = JSON.parse(localStorage.getItem("state"));

let initialState = {
  isLogged: false,
  user: {
    firstName: "Axel",
    adress: "Nantes 44300",
  },
  modal: {
    homeAdresseModal: "isClose",
  },
  login: {
    email: "",
    password: "",
  },
  itemInBasket: "0",
};

export const setIsLoggedAction = { type: "setIsLogged" };
export const setEmailInStateAction = (email) => ({
  type: "setEmailInState",
  payload: { email },
});
export const setPasswordInStateAction = (password) => ({
  type: "setPasswordInState",
  payload: { password },
});

// Définissez votre reducer pour gérer les actions et mettre à jour l'état du store
if (savedState) {
  initialState = savedState;
}
const myReducer = (state = initialState, action) => {
  if (action.type === "setIsLogged") {
    return {
      ...state,
      isLogged: true,
    };
  }
  if (action.type === "setEmailInState") {
    return {
      ...state,
      login: {
        ...state.login,
        email: action.payload,
      },
    };
  }
  if (action.type === "setPasswordInState") {
    return {
      ...state,
      login: {
        ...state.login,
        password: action.payload,
      },
    };
  }
  return state;
};

// Créez et exportez votre store en utilisant le reducer
const store = createStore(myReducer);
export default store;
