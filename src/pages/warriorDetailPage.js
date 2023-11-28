import { warriors } from "../data/warriors";
import warriorDetailLayout from "../components/warriorsDetail/warriorDetailLayout";
import warriorDetailErrorLayout from "../components/warriorsDetail/warriorDetailErrorLayout";
//function warriorDetailPage({id})

function warriorDetailPage(params) {
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
