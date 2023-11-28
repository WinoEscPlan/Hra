function warriorDetailLayout(warrior) {
  document.addEventListener("DOMContentLoaded", () => {
    let element = document.getElementById("btnBack");
    element.addEventListener("click", () => {
      window.history.pushState({}, "", "/list");
    });
  });

  return `<div><h2>Chosen Warrior</h2><p>${warrior.id}</p><p>${warrior.name}</p><p>${warrior.type}</p></div><button id="btnBack">Back</button>`;
}

export default warriorDetailLayout;
