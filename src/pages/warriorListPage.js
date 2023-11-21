import warriorList from "../components/warriorlist";
import { warriors } from "../../warriors";
import dropDownWarriorsSelect from "../components/dropDownWarriorsList";

function warriorListPage(params) {
  let searchParams = new URLSearchParams(window.location.search);
  params.type = searchParams.get("type");

  let warriorsFilteredByType = warriors.filter(
    (warrior) => warrior.type === params.type
  );

  console.log(window.location.search);
  console.log(window.location.pathname);
  console.log(params);

  let pageContent = `
  <div>${dropDownWarriorsSelect()}</div><br>
  ${
    params.type
      ? `
    <div>
      <h2><strong>${params.type}</strong></h2>
    </div>
    <div id="list-of-warriors" class="list-container">
      ${
        params.type === "All of Them"
          ? warriorList(warriors, "list1")
          : warriorList(warriorsFilteredByType, "list1")
      }
    </div>
  `
      : `
    <div>
      <p>Please choose your alignment!</p>
    </div>
  `
  }
`;

  return pageContent;
}

export default warriorListPage;
