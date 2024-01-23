import warriorDetailLayout from "../components/warriorsDetail/warriorDetailLayout";
import warriorDetailErrorLayout from "../components/warriorsDetail/warriorDetailErrorLayout";
import loadWarriors from "../components/dataHandlers/loadWarriors";

//function warriorDetailPage({id})
let warriors = [];
let wasLoaded = false;

function warriorDetailPage(params) {
  if (!wasLoaded) {
    loadWarriors("http://localhost:3000/api-warriors").then((data) => {
      warriors = data;
      wasLoaded = true;
    });
  }
  let id = parseInt(params.id); //id = parseInt(id)
  let foundWarrior = warriors.find((warrior) => warrior.id === id);

  if (foundWarrior) {
    return warriorDetailLayout(foundWarrior);
  }
  return warriorDetailErrorLayout();

  /*return foundWarrior
    ? warriorDetailLayout(foundWarrior)
    : warriorDetailErrorLayout(); */
}

export default warriorDetailPage;
