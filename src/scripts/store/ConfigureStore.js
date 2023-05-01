import { createStore } from "redux";

// get state in localStorage
const savedState = JSON.parse(localStorage.getItem("state"));

let initialState = {
  isLogged: false,
  user: {
    firstName: "",
    lastName: "",
    age: "",
    zipShown: "",
    adress: [
      {
        title: "",
        city: "",
        zip: "",
        zipShown: "",
        street: "",
        country: "",
        phone: "",
      },
    ],
  },
  modal: {
    adressModal: "isClose",
  },
  login: {
    email: "",
    password: "",
  },
  itemInBasket: "0",
};

export const setIsLoggedAction = { type: "setIsLogged" };
export const setAdressModalIsOpenAction = { type: "setAdressModalIsOpen" };
export const setDisconnectdAction = { type: "setDisconnect" };

export const setZipAdressFromModalAction = (zip) => ({
  type: "setZipAdressFromModal",
  payload: { zip },
});
export const setUserDataAction = (data) => ({
  type: "setUserData",
  payload: { data },
});
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
  if (action.type === "setAdressModalIsOpen") {
    return {
      ...state,
      modal: {
        ...state.modal,
        adressModal: "isOpen",
      },
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
  if (action.type === "setUserData") {
    const { firstName, lastName, age, zipShown, adress } = action.payload;
    return {
      ...state,
      user: {
        firstName,
        lastName,
        age,
        zipShown,
        adress,
      },
    };
  }
  if (action.type === "setZipAdressFromModal") {
    return {
      ...state,
      user: {
        ...state.user,
        zipShown: action.payload,
      },
    };
    console.log(state);
  }

  if (action.type === "setDisconnect") {
    localStorage.removeItem("state");
    return initialState;
  }
  return state;
};

// Créez et exportez votre store en utilisant le reducer
const store = createStore(myReducer);
export default store;
