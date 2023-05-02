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
  buttonResearch.setAttribute("onclick", "search()");
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
