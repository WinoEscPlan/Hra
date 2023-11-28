import warriorList from "./warriorList";
import dropDownWarriorsSelect from "./dropDownWarriorsSelect";

function warriorTypeHeader(type) {
  return type ? `<h2><strong>${type}</strong></h2>` : "";
}

function warriorListLayout(params, warriors, warriorsFilteredByType) {
  const dropdown = dropDownWarriorsSelect();
  const header = params.type
    ? warriorTypeHeader(params.type)
    : "<div><p>Please choose your alignment!</p></div>";
  const list =
    params.type === "All of Them"
      ? warriorList(warriors, "list1")
      : warriorList(warriorsFilteredByType, "list1");

  return `
      <div>${dropdown}</div><br>
      <div>${header}</div>
      <div id="list-of-warriors" class="list-container">${list}</div>
    `;
}

export default warriorListLayout;
