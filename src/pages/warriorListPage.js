import warriorList from "../components/warriorlist";
import { warriors, filterWarriorsByType } from "../../warriors";
import { matchRoute } from "../routes";
function warriorListPage(params) {
  console.log(params);
  const allies = filterWarriorsByType(warriors, "ally");
  const enemies = filterWarriorsByType(warriors, "enemy");

  const alliesList = warriorList(allies, "list1");
  const enemiesList = warriorList(enemies, "list2");

  return ` <h1>Evil vs Good</h1>
  <form action="/list" method="GET">
  <label for="selectBox">Select an option:</label>
  <select id="selectBox" name="type">
      <option value="ally">ally</option>
      <option value="enemy">enemy</option>
  </select>
  <input type="submit" value="Submit">
</form>



  <div id="list-of-warriors" class="list-container">
    ${alliesList}
    ${enemiesList}
    </div>`;
}

export default warriorListPage;

/*
malo by to byť na stránke so zoznamom bojovníkov
ak je niečo vybrané v tom selecte, tak zoznam zobrazuje iba bojovníkov, ktorí vyhovujú vybranej možnosti
Približný postup:
na začiatok je najlepšie to robiť ako klasický formulár: <form> so selectom a tlačidlom na potvrdenie. Formulár bude mať metódu get, select musí mať nastavený atribút name
potvrdenie a ani výber v selectboxe nebudú previazané z javascriptom, formulár sa kliknutí klasicky "odošle"
po odoslaní dôjde k zmene URL (to urobí prehliadač sám od seba)
listing bojovníkov sa musí pozrieť, či je v URL medzi parametrami za otáznikom špecifikovaný typ bojovníka a ak áno, tak vypíše iba vyhovujúcich.
*/
