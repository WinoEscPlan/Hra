import loadWarriors from "../dataHandlers/loadWarriors";

let warriors = [];
let wasLoaded = false;

function generateOptions() {
  if (!wasLoaded) {
    loadWarriors("http://localhost:3000/api-warriors").then((data) => {
      warriors = data;
      wasLoaded = true;
    });
  }
  let optionsHtml;
  let types = Array.from(
    new Set(warriors.map((warrior) => warrior.type))
  ).sort();
  console.log("dropdown", warriors);
  types.forEach((type) => {
    optionsHtml += `<option value="${type}">${type}</option>`;
  });

  return optionsHtml;
}

export default generateOptions;

//samostatne - vygeneruje options v dropdown menu
