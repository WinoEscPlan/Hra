import { warriors } from "../../warriors";

function warriorDetailPage() {
  const parts = window.location.pathname.split("/");
  const id = +parts[2];

  const warrior = warriors.find((warrior) => warrior.id === id);

  if (warrior) {
    return `<div><h2>Chosen Warrior</h2><p>${warrior.id}</p><p>${warrior.name}</p><p>${warrior.type}</p></div>`;
  } else {
    return `<div><p>Bojovík nebol nenájdený, klikni <a href="/list"><strong>sem</strong></a> a vyber si zo zoznamu bojovníkov!</p></div>`;
  }
}

export default warriorDetailPage;
