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
    "research-body-filterArea-price-divInputsPrice-inputPrice"
  );
  maxPrice.setAttribute(
    "class",
    "research-body-filterArea-price-divInputsPrice-inputPrice"
  );
  inputMinPrice.setAttribute(
    "class",
    "research-body-filterArea-price-divInputsPrice-inputPrice-input"
  );
  inputMaxPrice.setAttribute(
    "class",
    "research-body-filterArea-price-divInputsPrice-inputPrice-input"
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
