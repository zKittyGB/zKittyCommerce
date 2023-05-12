import store from "../store/ConfigureStore.js";
import products from "../../data/products.json";

function displayNumberOfResults() {
  //function that display the number of results return
  const state = store.getState();
  const numberOfResult = state.research.userResultResearch.length;
  const researchNResult = document.querySelector(".research-Nresult");
  const pNumberOfResult = document.createElement("p");
  const spanNumberOfResult = document.createElement("span");
  const inputSort = document.createElement("select");
  const emInputSort = document.createElement("em");
  const optionFeatured = document.createElement("option");
  const optionPriceAsc = document.createElement("option");
  const optionPriceDesc = document.createElement("option");
  const optionRating = document.createElement("option");
  const optionLatest = document.createElement("option");
  //content of the text
  pNumberOfResult.textContent = `Sur ${numberOfResult} résultats pour `;
  //span to change the color of researchValue
  spanNumberOfResult.textContent = `"${state.research.researchValue}"`;
  pNumberOfResult.style.color = "black";
  spanNumberOfResult.style.color = "#e30613";
  //set text content to input elements
  optionFeatured.textContent = "Mise en avant";
  optionPriceAsc.textContent = "Prix: Ordre croissant";
  optionPriceDesc.textContent = "Prix: Ordre décroissant";
  optionRating.textContent = "Moyenne des commentaires";
  optionLatest.textContent = "Dernière arrivées";
  //setAttribute to input elements
  emInputSort.setAttribute(
    "class",
    "chevronDownSort fa-solid fa-chevron-down fa-2xs"
  );
  inputSort.setAttribute("id", "sortInput");
  optionFeatured.setAttribute("value", "Mise en avant");
  optionFeatured.setAttribute("class", "featured");
  optionPriceAsc.setAttribute("value", "Prix: Ordre croissant");
  optionPriceDesc.setAttribute("value", "Prix: Ordre décroissant");
  optionRating.setAttribute("value", "Moyenne des commentaires");
  optionLatest.setAttribute("value", "Dernière arrivées");
  //link elements to each other
  researchNResult.appendChild(pNumberOfResult);
  pNumberOfResult.appendChild(spanNumberOfResult);
  researchNResult.appendChild(inputSort);
  researchNResult.appendChild(emInputSort);
  inputSort.appendChild(optionFeatured);
  inputSort.appendChild(optionPriceAsc);
  inputSort.appendChild(optionPriceDesc);
  inputSort.appendChild(optionRating);
  inputSort.appendChild(optionLatest);
}
displayNumberOfResults();

function displayBodyResults() {
  //function that display the body of the result research
  const main = document.querySelector("#main");
  const body = document.createElement("div");
  const filterArea = document.createElement("div");
  const resultsArea = document.createElement("div");
  const resultsGallery = document.createElement("div");
  const h1ResultsArea = document.createElement("h1");
  //set attribute to the elements
  body.setAttribute("class", "research-body");
  filterArea.setAttribute("class", "research-body-filterArea");
  resultsArea.setAttribute("class", "research-body-resultsArea");
  resultsGallery.setAttribute(
    "class",
    "research-body-resultsArea-resultsGallery"
  );
  //content & style
  h1ResultsArea.textContent = "Résultats";
  h1ResultsArea.style.fontSize = "20px";
  h1ResultsArea.style.marginTop = "20px";
  //link elements to each others
  main.appendChild(body);
  body.appendChild(filterArea);
  body.appendChild(resultsArea);
  resultsArea.appendChild(h1ResultsArea);
  resultsArea.appendChild(resultsGallery);
  createCardResult(resultsGallery);
}
displayBodyResults();

export function createCardResult(resultsGallery) {
  //function that create the results gallery
  const state = store.getState();
  const results = state.research.userResultResearch;
  const sortValue = document.querySelector("#sortInput").value;
  let productsList = products;
  //create card for each id
  results.forEach((element) => {
    const card = document.createElement("div");
    const cardImg = document.createElement("div");
    const cardDetails = document.createElement("div");
    const cardName = document.createElement("p");
    const cardNotation = document.createElement("div");
    const cardPrice = document.createElement("h1");
    const cardDelivery = document.createElement("p");
    const cardDeliveryPrice = document.createElement("p");
    //select the matched product from the id
    const productFilter = productsList.filter((item) => item.id === element);
    //set attribute to the elements
    card.setAttribute(
      "class",
      `research-body-resultsArea-resultsGallery-card card-${element}`
    );
    cardImg.setAttribute(
      "class",
      `research-body-resultsArea-resultsGallery-card-img`
    );
    cardDetails.setAttribute(
      "class",
      `research-body-resultsArea-resultsGallery-card-details`
    );
    cardNotation.setAttribute(
      "class",
      `research-body-resultsArea-resultsGallery-card-details-notation`
    );
    //content & style
    cardImg.style.backgroundImage = `url(${productFilter[0].picture})`;
    cardName.textContent = `${productFilter[0].name}`;
    cardName.style.fontSize = "19px";
    cardName.style.marginBottom = "15px";
    cardPrice.textContent = `${productFilter[0].price}`;
    cardPrice.style.marginTop = "5px";
    cardPrice.style.marginBottom = "10px";
    cardPrice.style.fontSize = "30px";
    cardDelivery.textContent = "Recevez-le entre le () et le () ";
    cardDelivery.style.marginBottom = "5px";
    cardDelivery.style.marginTop = "5px";
    cardDeliveryPrice.textContent = "Livraison à ... €";
    cardDeliveryPrice.style.marginTop = "5px";
    //link element to each other
    resultsGallery.appendChild(card);
    card.appendChild(cardImg);
    card.appendChild(cardDetails);
    cardDetails.appendChild(cardName);
    cardDetails.appendChild(cardNotation);
    cardDetails.appendChild(cardPrice);
    cardDetails.appendChild(cardDelivery);
    cardDetails.appendChild(cardDeliveryPrice);
    createStarsNotation(cardNotation, productFilter);
  });
}

function createStarsNotation(cardNotation, productFilter) {
  //function that create the display of the customers notation
  const note = productFilter[0].note;
  for (let i = 0; i <= Math.floor(note) - 1; i++) {
    const fullStar = document.createElement("em");
    fullStar.setAttribute("class", "fa-sharp fa-solid fa-star");
    cardNotation.appendChild(fullStar);
  }
  if (!Number.isInteger(parseFloat(note))) {
    const halfStar = document.createElement("em");
    halfStar.setAttribute("class", "fa-solid fa-star-half-stroke");
    cardNotation.appendChild(halfStar);
  }
  for (let i = Math.ceil(note); i < 5; i++) {
    const star = document.createElement("em");
    star.setAttribute("class", "fa-regular fa-star");
    cardNotation.appendChild(star);
  }
}

function sortGallery() {
  //function that sort the gallery
  const state = store.getState();
  const inputSort = document.querySelector("#sortInput");
  const gallery = document.querySelector(
    ".research-body-resultsArea-resultsGallery"
  );
  //action listener on inputSort
  inputSort.addEventListener("change", (event) => {
    //catch inputSort value
    const inputSortValue = event.target.value;
    const results = state.research.userResultResearch;
    const inputValue = state.research.researchValue;
    let productsList = products;
    //resultSort is use to stock the comparator element with the id
    const resultSort = [];
    //searchResult is returned to update state
    let searchResult = [];
    //remove the gallery children
    while (gallery.firstChild) {
      gallery.removeChild(gallery.firstChild);
    }
    //for each id matching with the user research
    results.forEach((element) => {
      //get the product in the list from the id
      const productFilter = productsList.filter((item) => item.id === element);
      //stock the sort element needed to compare
      if (inputSortValue === "Mise en avant") {
        //push in the new array
        resultSort.push({
          comparator: productFilter[0].name.toUpperCase(),
          id: element,
        });
      } else if (
        inputSortValue === "Prix: Ordre croissant" ||
        inputSortValue === "Prix: Ordre décroissant"
      ) {
        //change the price to float
        const priceString = productFilter[0].price
          .slice(0, -1)
          .replace(",", ".");
        const priceFloat = parseFloat(priceString);
        //push in the new array
        resultSort.push({
          comparator: priceFloat,
          id: element,
        });
      } else if (inputSortValue === "Moyenne des commentaires") {
        //push in the new array
        resultSort.push({ comparator: productFilter[0].note, id: element });
      } else if (inputSortValue === "Dernière arrivées") {
        //push in the new array
        resultSort.push({
          comparator: productFilter[0].dateDeposit.replace(/\//g, "-"),
          id: element,
        });
      }
    });
    //sort the array
    if (
      inputSortValue === "Mise en avant" ||
      inputSortValue === "Prix: Ordre croissant"
    ) {
      //sort asc
      resultSort.sort((a, b) => {
        if (a.comparator < b.comparator) {
          return -1;
        }
        if (a.comparator > b.comparator) {
          return 1;
        }
        return 0;
      });
    } else {
      //sort desc
      resultSort.sort((a, b) => {
        if (a.comparator < b.comparator) {
          return 1;
        }
        if (a.comparator > b.comparator) {
          return -1;
        }
        return 0;
      });
    }
    //push the sort ID in the searchResult array
    resultSort.forEach((element) => {
      searchResult.push(element.id);
    });
    //update searchResult in state with the sort
    store.dispatch({
      type: "setResearchResult",
      payload: { searchResult, inputValue },
    });
    //recreate gallery
    createCardResult(gallery);
  });
}
sortGallery();
