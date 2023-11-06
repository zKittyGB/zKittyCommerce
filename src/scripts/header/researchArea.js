import store from "../store/ConfigureStore.js";
import products from "../../data/products.json";

function displayResearch() {
  /*function that create the display of the research area */
  const headerTopSection = document.querySelector(".headerTopSection");
  const divResearchArea = document.createElement("div");
  const formResearch = document.createElement("form");
  const selectResearch = document.createElement("select");
  const emSelectResearch = document.createElement("em");
  const allCategory = document.createElement("option");
  const homeCategory = document.createElement("option");
  const inputResearch = document.createElement("input");
  const buttonResearch = document.createElement("button");
  const emButtonResearch = document.createElement("em");
  formResearch.setAttribute("class", "formResearch");
  divResearchArea.setAttribute("class", "researchArea");
  formResearch.setAttribute("tabindex", "0");
  selectResearch.setAttribute("id", "categorySelect");
  emSelectResearch.setAttribute(
    "class",
    "chevronDownSelect fa-solid fa-caret-down"
  );
  allCategory.setAttribute("value", "");
  allCategory.textContent = "Toutes nos catégories";
  homeCategory.setAttribute("value", "Maison");
  homeCategory.textContent = "Maison";
  inputResearch.setAttribute("type", "text");
  inputResearch.setAttribute("id", "searchInput");
  inputResearch.setAttribute("placeholder", "Rechercher");
  buttonResearch.setAttribute("type", "button");
  buttonResearch.setAttribute("class", "buttonResearch");
  buttonResearch.addEventListener("click", searchProduct);
  emButtonResearch.setAttribute(
    "class",
    "searchIcon fa-solid fa-magnifying-glass"
  );
  headerTopSection.appendChild(divResearchArea);
  divResearchArea.appendChild(formResearch);
  formResearch.appendChild(selectResearch);
  formResearch.appendChild(emSelectResearch);
  selectResearch.appendChild(allCategory);
  selectResearch.appendChild(homeCategory);
  formResearch.appendChild(inputResearch);
  formResearch.appendChild(buttonResearch);
  buttonResearch.appendChild(emButtonResearch);
}

displayResearch();

function searchProduct() {
  //function that research a product from the input value
  const inputResearch = document.querySelector("#searchInput");
  const productsList = products;
  const inputValue = inputResearch.value;
  let searchResult = [];
  if (inputValue.length === 0) {
    store.dispatch({
      type: "setResearchResult",
      payload: { searchResult, inputValue },
    });
    localStorage.setItem("state", JSON.stringify(store.getState())); // save the state in localStorage
    window.location.href = "../../../../index.html";
  } else {
    // clean useless space before and after the input value
    const cleanedInputValue = inputValue.trim().toLowerCase();

    // Filter product including input value
    const filteredProducts = productsList.filter((product) =>
      product.name.toLowerCase().includes(cleanedInputValue)
    );
    //sort filtered product by name
    filteredProducts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    // catch the id of each product including input value
    if (filteredProducts.length > 0) {
      //for each match, push the id in searchResult
      filteredProducts.forEach((product) => searchResult.push(product.id));
    }
    store.dispatch({
      type: "setResearchResult",
      payload: { searchResult, inputValue },
    });
    localStorage.setItem("state", JSON.stringify(store.getState())); // save the state in localStorage
    window.location.href = "../../../../dist/pages/research.html";
  }
}
