import store from "../store/ConfigureStore.js";
import products from "../../data/products.json";
import { createCardResult } from "./researchDisplay.js";

function displayFreeDeliveryFilterMenu() {
  //function that display the free delivery filter
  const bodyFilterArea = document.querySelector(".research-body-filterArea");
  const freeDeliveryFilter = document.createElement("div");
  const h1DeliveryFilter = document.createElement("h1");
  const checkboxDeliveryArea = document.createElement("div");
  const checkboxDelivery = document.createElement("input");
  const pFreeDelivery = document.createElement("p");
  const pDeliveryBy = document.createElement("p");
  checkboxDelivery.type = "checkbox";
  checkboxDelivery.setAttribute(
    "class",
    `deliveryCheckbox filter-features delivery-checkbox`
  );
  //set attribute to elements
  freeDeliveryFilter.setAttribute(
    "class",
    "research-body-filterArea-freeDeliveryFilter"
  );
  checkboxDeliveryArea.setAttribute(
    "class",
    "research-body-filterArea-freeDeliveryFilter-checkboxArea"
  );
  //set content to element
  h1DeliveryFilter.textContent = "Éligible à la livraison gratuite";
  pFreeDelivery.textContent = "Livraison gratuite";
  pDeliveryBy.textContent =
    "Livraison gratuite par zKittyCommerce vers les destinations éligibles";
  //set style to elements
  h1DeliveryFilter.style.fontSize = "14px";
  //link elements to each other
  bodyFilterArea.appendChild(freeDeliveryFilter);
  freeDeliveryFilter.appendChild(h1DeliveryFilter);
  freeDeliveryFilter.appendChild(checkboxDeliveryArea);
  checkboxDeliveryArea.appendChild(checkboxDelivery);
  checkboxDeliveryArea.appendChild(pFreeDelivery);
  freeDeliveryFilter.appendChild(pDeliveryBy);
}
displayFreeDeliveryFilterMenu();

function displayNotationFilterMenu() {
  //function that display the notation filter menu
  const bodyFilterArea = document.querySelector(".research-body-filterArea");
  const notationFilter = document.createElement("div");
  const h1NotationFilter = document.createElement("h1");
  const notation4Stars = document.createElement("div");
  const notation3Stars = document.createElement("div");
  const notation2Stars = document.createElement("div");
  const notation1Stars = document.createElement("div");
  function setStarsNotation(props) {
    //function that create starts filter notation
    for (let i = 0; i <= props.className.charAt(8) - 1; i++) {
      //create full stars
      const fullStarsFilter = document.createElement("em");
      //set content to elements
      fullStarsFilter.setAttribute("class", "fa-sharp fa-solid fa-star fa-xs");
      fullStarsFilter.style.color = "#ffa41c";
      props.appendChild(fullStarsFilter);
    }
    for (let i = props.className.charAt(8); i < 5; i++) {
      //create empty stars
      const emptyStarsFilter = document.createElement("em");
      //set content to elements
      emptyStarsFilter.setAttribute("class", "fa-regular fa-star fa-xs");
      emptyStarsFilter.style.color = "#ffa41c";
      props.appendChild(emptyStarsFilter);
    }
  }
  //set attribute to elements
  notation4Stars.setAttribute(
    "class",
    "notation4Stars research-body-filterArea-notation-stars"
  );
  notation3Stars.setAttribute(
    "class",
    "notation3Stars research-body-filterArea-notation-stars"
  );
  notation2Stars.setAttribute(
    "class",
    "notation2Stars research-body-filterArea-notation-stars"
  );
  notation1Stars.setAttribute(
    "class",
    "notation1Stars research-body-filterArea-notation-stars"
  );
  notationFilter.setAttribute("class", "research-body-filterArea-notation");
  //set style to elements
  h1NotationFilter.style.fontSize = "14px";
  //set content to elements
  h1NotationFilter.textContent = "Commentaire client";
  bodyFilterArea.appendChild(notationFilter);
  notationFilter.appendChild(h1NotationFilter);
  notationFilter.appendChild(notation4Stars);
  setStarsNotation(notation4Stars);
  notationFilter.appendChild(notation3Stars);
  setStarsNotation(notation3Stars);
  notationFilter.appendChild(notation2Stars);
  setStarsNotation(notation2Stars);
  notationFilter.appendChild(notation1Stars);
  setStarsNotation(notation1Stars);
  //add &plus after each stars
  for (let i = 1; i <= 4; i++) {
    const andMore = document.createElement("p");
    andMore.textContent = "& plus";
    document.querySelector(`.notation${i}Stars`).appendChild(andMore);
  }
}
displayNotationFilterMenu();

function displayMarkFilterMenu() {
  const state = store.getState();
  const productsList = products;
  const results = state.research.userResultResearch;
  const bodyFilterArea = document.querySelector(".research-body-filterArea");
  const markFilter = document.createElement("div");
  const h1MarkFilter = document.createElement("h1");
  //array wich stock all mark with duplicata
  let markList = [];
  //array which stock mark without duplicata
  let returnMarkList = [];
  //get all the research item marks
  results.forEach((element) => {
    const productFilter = productsList.filter((item) => item.id === element);
    markList.push(productFilter[0].mark);
  });
  //deletre mark duplicata
  for (let i = 0; i <= markList.length - 1; i++) {
    if (!returnMarkList.includes(markList[i])) {
      returnMarkList.push(markList[i]);
    }
  }
  //set attribute to the elements
  markFilter.setAttribute("class", "research-body-filterArea-markFilter");
  //set content to the elements
  h1MarkFilter.textContent = "Marques";
  //set style to the elements
  h1MarkFilter.style.fontSize = "14px";
  //display all mark in the filter mark area
  bodyFilterArea.appendChild(markFilter);
  markFilter.appendChild(h1MarkFilter);
  returnMarkList.forEach((element) => {
    const checkboxMarkArea = document.createElement("div");
    const checkboxMark = document.createElement("input");
    const pCheckboxMark = document.createElement("p");
    //set attribute to element
    checkboxMarkArea.setAttribute(
      "class",
      "research-body-filterArea-markFilter-checkboxArea"
    );
    //set type to input
    checkboxMark.type = "checkbox";
    checkboxMark.setAttribute(
      "class",
      `markFiltercheckbox-checkbox filter-features mark-checkbox-${element.replaceAll(
        " ",
        "_"
      )}`
    );
    //set content to element
    pCheckboxMark.textContent = `${element}`;
    //link elements to each other
    markFilter.appendChild(checkboxMarkArea);
    checkboxMarkArea.appendChild(checkboxMark);
    checkboxMarkArea.appendChild(pCheckboxMark);
  });
}

displayMarkFilterMenu();

function displayPriceFilterMenu() {
  const bodyFilterArea = document.querySelector(".research-body-filterArea");
  const priceFilter = document.createElement("div");
  const h1PriceFilter = document.createElement("h1");
  const divInputsPrice = document.createElement("div");
  const minPrice = document.createElement("div");
  const inputMinPrice = document.createElement("input");
  const maxPrice = document.createElement("div");
  const inputMaxPrice = document.createElement("input");
  const inputButtonPrice = document.createElement("button");
  function displayCheckBoxPriceMenu(props) {
    //function that create each price line
    const priceArray = [20, 50, 100, 200, 500];
    for (let i = 0; i <= 5; i++) {
      const checkboxPriceFilter = document.createElement("div");
      const checkbox = document.createElement("input");
      const price = document.createElement("p");
      //set attribute to elements
      checkboxPriceFilter.setAttribute(
        "class",
        `checkbox${i}PriceFilter checkboxPriceFilter`
      );
      checkbox.type = "checkbox";
      checkbox.setAttribute(
        "class",
        `checkboxPricefilter-features filter-features price-checkbox-${i}`
      );
      //set content to elements
      if (i === 0) {
        price.textContent = `Jusqu'à ${priceArray[i]} EUR`;
      } else if (i <= 4) {
        price.textContent = `${priceArray[i - 1]} à ${priceArray[i]} EUR`;
      } else if (i === 5) {
        price.textContent = `${priceArray[i - 1]} EUR et plus`;
      }
      //link element to each other
      props.appendChild(checkboxPriceFilter);
      checkboxPriceFilter.appendChild(checkbox);
      checkboxPriceFilter.appendChild(price);
    }
  }
  //set attribute to the elements
  priceFilter.setAttribute("class", "research-body-filterArea-price");
  divInputsPrice.setAttribute(
    "class",
    "research-body-filterArea-price-divInputsPrice"
  );
  minPrice.setAttribute(
    "class",
    "research-body-filterArea-price-divInputsPrice-inputPrice minPriceArea"
  );
  maxPrice.setAttribute(
    "class",
    "research-body-filterArea-price-divInputsPrice-inputPrice maxPriceArea"
  );
  inputMinPrice.setAttribute(
    "class",
    "research-body-filterArea-price-divInputsPrice-inputPrice-input inputMinPrice"
  );
  inputMaxPrice.setAttribute(
    "class",
    "research-body-filterArea-price-divInputsPrice-inputPrice-input inputMaxPrice"
  );
  inputButtonPrice.setAttribute(
    "class",
    "research-body-filterArea-price-divInputsPrice-inputPrice-button"
  );
  inputButtonPrice.textContent = "Aller";

  //set content to the elements
  h1PriceFilter.textContent = "Prix";
  inputMaxPrice.placeholder = "Max";
  inputMinPrice.placeholder = "Min";
  //set style to the elements
  h1PriceFilter.style.fontSize = "14px";
  //link elements to each other
  bodyFilterArea.appendChild(priceFilter);
  priceFilter.appendChild(h1PriceFilter);
  //call the checkbox function
  displayCheckBoxPriceMenu(priceFilter);
  priceFilter.appendChild(divInputsPrice);
  divInputsPrice.appendChild(minPrice);
  divInputsPrice.appendChild(maxPrice);
  divInputsPrice.appendChild(inputButtonPrice);
  for (let i = 0; i <= 1; i++) {
    const pInputPrice = document.createElement("p");
    pInputPrice.textContent = "EUR";
    if (i === 0) {
      minPrice.appendChild(pInputPrice);
    } else {
      maxPrice.appendChild(pInputPrice);
    }
  }
  minPrice.appendChild(inputMinPrice);
  maxPrice.appendChild(inputMaxPrice);
}

displayPriceFilterMenu();

//event listener to add box shadow on the input price min & max
const inputMinPrice = document.querySelector(".inputMinPrice");
const inputMaxPrice = document.querySelector(".inputMaxPrice");
const minPriceArea = document.querySelector(".minPriceArea");
const maxPriceArea = document.querySelector(".maxPriceArea");
//event listener focus input min
inputMinPrice.addEventListener("focus", function () {
  minPriceArea.style.border = "1px black solid";
  minPriceArea.style.boxShadow = "0px 0px 5px #0ca8c4";
});
//event listener stop focus input min
inputMinPrice.addEventListener("blur", function () {
  minPriceArea.style.border = "1px solid rgb(124, 124, 124)";
  minPriceArea.style.boxShadow = "none";
});
//event listener focus input max
inputMaxPrice.addEventListener("focus", function () {
  maxPriceArea.style.border = "1px black solid";
  maxPriceArea.style.boxShadow = "0px 0px 5px #0ca8c4";
});
//event listener stop focus input max
inputMaxPrice.addEventListener("blur", function () {
  maxPriceArea.style.border = "1px solid rgb(124, 124, 124)";
  maxPriceArea.style.boxShadow = "none";
});

function uniquePriceCheckbox() {
  //function that bloque the multiple active checkbox possibility
  const checkboxPriceFilter = document.querySelectorAll(
    ".checkboxPricefilter-features"
  );
  const markFiltercheckbox = document.querySelectorAll(
    ".markFiltercheckbox-checkbox"
  );
  //bloque multiple active for price filter
  for (var i = 0; i < checkboxPriceFilter.length; i++) {
    checkboxPriceFilter[i].addEventListener("click", function () {
      // Si la checkbox est cochée
      if (this.checked) {
        // Décocher toutes les autres checkboxes
        for (var j = 0; j < checkboxPriceFilter.length; j++) {
          if (checkboxPriceFilter[j] != this) {
            checkboxPriceFilter[j].checked = false;
          }
        }
      }
    });
  }
}
uniquePriceCheckbox();

function filterFeatures() {
  const checkbox = document.querySelectorAll(".filter-features");
  const state = store.getState();
  const productsList = products;
  const resultSortList = [];
  const gallery = document.querySelector(
    ".research-body-resultsArea-resultsGallery"
  );

  //add an eventListner on each filter
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", function (e) {
      //at clic, get the full details list of each results item
      let elementChecked = [];
      let resultFullList = [];
      let temporarySearchResult = [];
      let cleanSearchResult = [];
      let searchResult = [];
      const inputValue = state.research.researchValue;
      const results = state.research.userResultResearch;
      results.forEach((element) => {
        const productFilter = productsList.filter(
          (item) => item.id === element
        );
        //stock the list in the array
        resultFullList.push(productFilter[0]);
      });
      //get all the filter checked
      checkbox.forEach((element) => {
        if (element.checked) {
          elementChecked.push(
            //get the last class if element is check
            element.classList.item(element.classList.length - 1)
          );
        }
      });
      let listOfFilter = { price: [], mark: [] };
      elementChecked.forEach((elementCheck) => {
        // filtrer par prix
        if (elementCheck.includes("price")) {
          listOfFilter.price.push(elementCheck);
          // trier par prix (appeler la fonction sortByPrice(elementCheck, resultFullList) ici)
        }
        // filtrer par marque
        if (elementCheck.includes("mark")) {
          listOfFilter.mark.push(elementCheck);
          // trier par marque (appeler la fonction sortByMark(elementChecked, resultFullList) ici)
        }
      });
      //explore each element of the results
      resultFullList.forEach((element) => {
        //check if mark filter are enable
        if (listOfFilter.mark.length != 0) {
          //for each mark filter, we ll check if element include the mark
          for (let j = 0; j < listOfFilter.mark.length; j++) {
            if (
              element.mark.includes(
                listOfFilter.mark[j].substring(14).replaceAll("_", " ")
              )
            ) {
              //push the element to the final array
              temporarySearchResult.push(element);
            }
          }
        } else {
          //if no mark filter
          temporarySearchResult.push(element);
        }
        //check if price filter is enable
        if (listOfFilter.price.length != 0) {
          let minPrice;
          let maxPrice;
          //create an array of the different filter price
          const priceArray = [20, 50, 100, 200, 500];
          //get the number of the filtrer price enable
          const checkboxKey = listOfFilter.price[0].charAt(
            listOfFilter.price[0].length - 1
          );
          if (checkboxKey == 0) {
            //filter result less  than 20€
            minPrice = 0;
            maxPrice = priceArray[checkboxKey];
            //delete all element over the price
            temporarySearchResult.forEach((element) => {
              if (parseFloat(element.price.replace("€", "")) <= maxPrice) {
                cleanSearchResult.push(element.id);
              }
            });
          } else if (checkboxKey > 0 && checkboxKey < 5) {
            //filter result between 20/50-50/100-100/200-200/500
            minPrice = priceArray[checkboxKey - 1];
            maxPrice = priceArray[checkboxKey];
            temporarySearchResult.forEach((element) => {
              if (
                parseFloat(element.price.replace("€", "")) <= maxPrice &&
                parseFloat(element.price.replace("€", "")) >= minPrice
              ) {
                cleanSearchResult.push(element.id);
              }
            });
          } else if (checkboxKey > 4) {
            //filter result than more 500 €
            minPrice = priceArray[checkboxKey - 1];
            temporarySearchResult.forEach((element) => {
              if (parseFloat(element.price.replace("€", "")) >= minPrice) {
                cleanSearchResult.push(element.id);
              }
            });
          }
        } else {
          //if no price filter
          temporarySearchResult.forEach((element) => {
            cleanSearchResult.push(element.id);
          });
        }
      });
      //clean the duplicata and push result in final array
      for (let k = 0; k <= cleanSearchResult.length - 1; k++) {
        if (!searchResult.includes(cleanSearchResult[k])) {
          searchResult.push(cleanSearchResult[k]);
        }
      }
      console.log(searchResult);
      //update the state user research result
      store.dispatch({
        type: "setResearchResult",
        payload: { searchResult, inputValue },
      });
      searchResult = [];
      console.log("searchresult", searchResult);

      //delete the gallery
      while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
      }
      //recreate the gallery sort
      createCardResult(gallery); // Appelle la fonction
    });
  }
}

filterFeatures();
