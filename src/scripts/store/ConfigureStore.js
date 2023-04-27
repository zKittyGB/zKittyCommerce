import { createStore } from "redux";

const initialState = {
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

// Définissez votre reducer pour gérer les actions et mettre à jour l'état du store
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_VALUE":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

// Créez et exportez votre store en utilisant le reducer
const store = createStore(myReducer);
export default store;
