import warriorList from "./warriorList";
import dropDownWarriorsSelect from "./dropDownWarriorsSelect";

function warriorTypeHeader(type) {
  return type ? `<h2><strong>${type}</strong></h2>` : "";
}

function warriorListLayout(warriors) {
  const searchParams = new URLSearchParams(window.location.search);
  const type = searchParams.get("type");

  const warriorsFilteredByType = warriors.filter(
    (warrior) => warrior.type === type
  );

  const dropdown = dropDownWarriorsSelect();
  const header = type
    ? warriorTypeHeader(type)
    : "<div><p>Please choose your alignment!</p></div>";
  const list =
    type === null || type === "All of Them"
      ? warriorList(warriors, "list1")
      : warriorList(warriorsFilteredByType, "list1");
  /*
  let list = "";
  if (params.type === null || params.type === "All of Them") {
    list = warriorList(warriors, "list1");
  } else {
    list = warriorList(warriorsFilteredByType, "list1");
  }
*/
  return `
      <div>${dropdown}</div><br>
      <div>${header}</div>
      <div id="list-of-warriors" class="list-container">${list}</div>
    `;
}

export default warriorListLayout;
