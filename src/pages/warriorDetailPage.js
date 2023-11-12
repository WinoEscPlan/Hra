import { warriors } from "../../warriors";
import { matchRoute } from "../routes";
//function warriorDetailPage({id})
function warriorDetailPage(params) {
  //const parts = window.location.pathname.split("/");
  // const id = +parts[2];
  // namiesto params.id premennú id

  let id = parseInt(params.id); //id = parseInt(id)
  let warrior = warriors.find((warrior) => warrior.id === id);
  console.log(id);
  console.log(warrior);

  if (warrior) {
    return `<div><h2>Chosen Warrior</h2><p>${warrior.id}</p><p>${warrior.name}</p><p>${warrior.type}</p></div>`;
  } else {
    return `<div><p>Bojovík nebol nenájdený, klikni <a href="/list"><strong>sem</strong></a> a vyber si zo zoznamu bojovníkov!</p></div>`;
  }
}

export default warriorDetailPage;
