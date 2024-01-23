function warriorDetailLayout(warrior) {
  document.addEventListener("custom:HTMLready", () => {
    console.log("nastalo HTML ready");
    const button = document.getElementById("btnBack");
    if (button) {
      button.addEventListener("click", () => {
        window.history.pushState({}, "", "/list");

        const clickEvent = new CustomEvent("custom:clickEvent", {
          detail: "/list",
        });

        document.dispatchEvent(clickEvent);
      });
    }
  });

  return `<div><h2>Chosen Warrior</h2><p>${warrior.id}</p><p>${warrior.name}</p><p>${warrior.type}</p></div><button id="btnBack">Back</button>`;
}

export default warriorDetailLayout;
