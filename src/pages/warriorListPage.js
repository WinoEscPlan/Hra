import warriorList from "../components/warriorlist";
import { warriors, filterWarriorsByType } from "../../warriors";

function warriorListPage() {
  const allies = filterWarriorsByType(warriors, "ally");
  const enemies = filterWarriorsByType(warriors, "enemy");

  const alliesList = warriorList(allies, "list1");
  const enemiesList = warriorList(enemies, "list2");
  return ` <h1>Evil vs Good</h1>
  <div id="list-of-warriors" class="list-container">
    ${alliesList}
    ${enemiesList}
    </div>`;
}

export default warriorListPage;
