import { warriors } from "../../warriors";

function generateOptions() {
  let optionsHtml;
  let types = Array.from(
    new Set(warriors.map((warrior) => warrior.type))
  ).sort();

  types.forEach((type) => {
    optionsHtml += `<option value="${type}">${type}</option>`;
  });
  console.log(types);
  return optionsHtml;
}

export default generateOptions;

//samostatne - vygeneruje options v dropdown menu
