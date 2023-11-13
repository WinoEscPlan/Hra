import warriorList from "../components/warriorlist";
import { warriors, filterWarriorsByType } from "../../warriors";

function warriorListPage(params) {
  //const isEnemyPage = window.location.search.endsWith("=enemy");
  // const isAllyPage = window.location.search.endsWith("=ally");

  let searchParams = new URLSearchParams(window.location.search);
  params.type = searchParams.get("type");

  let filteredWarriors = warriors.filter(
    (warrior) => warrior.type === params.type
  );

  console.log(window.location.search);
  console.log(window.location.pathname);
  console.log(params);

  //const allies = filterWarriorsByType(warriors, "ally");  filterWarriorsByType vo Warriors sa dá vymazať ...?
  // const enemies = filterWarriorsByType(warriors, "enemy");
  let allWarriors = warriorList(warriors, "list1");
  let warriorListByType = warriorList(filteredWarriors, "list1");

  const dropDownWarriorsSelect = ` <h1>Choose Your Side</h1>
  <form action="/list" method="GET">
  <label for="selectBox">Select an option:</label>
  <select id="selectBox" name="type">
      <option value="All of them">All Warriors</option>  
      ${generateOptions()}
      <option value="evil error test">error_test</option>
  </select>
  <input type="submit" value="Submit">
</form>
`;
  //samostatne - vygeneruje options v dropdown menu
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
  //toto ale viem pridať hocikoho do zoznamu
  /* <option value="enemy">enemy</option>
      <option value="neutral">neutral</option>
      <option value="chaotic evil">chaotic evil</option>*/

  if (filteredWarriors.length > 0) {
    // document.getElementById("selectBox").value = params.type; => ako zariadiť aby ostalo vybraté option? A + medzi slovami v params query?
    return `<div>${dropDownWarriorsSelect}</div><br><div><h2><strong>${params.type}</strong></h2></div><div id="list-of-warriors" class="list-container">${warriorListByType}</div>`;
  } else if (window.location.search.endsWith("=All+of+them")) {
    return `<div>${dropDownWarriorsSelect}</div><br><h2><strong>${params.type}</strong></h2><div id="list-of-warriors" class="list-container">${allWarriors}</div>`;
  } else {
    return `<div>${dropDownWarriorsSelect}</div><br><div><p>Bojovík nebol nájdený, vyber si zo zoznamu bojovníkov podľa typu!</p></div>`;
  }
  //pri .endsWith vzniká problém ak niekto prepíše option value?

  /*if (params.type == "enemy") {
    console.log("Enemy selected");
    return `<div>${pageContent}</div><br>
    <div id="list-of-warriors" class="list-container">
    ${enemiesList}
    </div>`;
  } else if (params.type === "ally") {
    console.log("Ally selected");
    return `<div>${pageContent}</div><br>
    <div id="list-of-warriors" class="list-container">
      ${alliesList}
      </div>`;
  } else if (params.type === "both") {
    return `<div>${pageContent}</div><br>
     <div id="list-of-warriors" class="list-container"> 
      ${alliesList}
      ${enemiesList}
      </div>`;
  }*/
}
//spýtať sa prečo je value prvé a key druhe?
// warriorListPage(params) ... searchParams.forEach((value, key) => {
//  params["type"] = value;

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
