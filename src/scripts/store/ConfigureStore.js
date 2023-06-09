import { createStore } from "redux";

// get state in localStorage
const savedState = JSON.parse(localStorage.getItem("state"));

let initialState = {
  isLogged: false,
  itemInBasket: "0",
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
    wishLish: [],
  },
  modal: {
    adressModal: "isClose",
  },
  login: {
    email: "",
    password: "",
  },
  research: {
    userResultResearch: [],
    researchValue: "",
  },
};

export const setIsLoggedAction = { type: "setIsLogged" };
export const setAdressModalIsOpenAction = { type: "setAdressModalIsOpen" };
export const setDisconnectdAction = { type: "setDisconnect" };
export const setResearchResultAction = (userResultResearch) => ({
  type: "setResearchResult",
  payload: { searchResult, inputValue },
});
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
  if (action.type === "setResearchResult") {
    return {
      ...state,
      research: {
        ...state.research,
        userResultResearch: action.payload.searchResult,
        researchValue: action.payload.inputValue,
      },
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
    const { firstName, lastName, age, zipShown, adress, wishList } =
      action.payload;
    return {
      ...state,
      user: {
        firstName,
        lastName,
        age,
        zipShown,
        adress,
        wishList,
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
