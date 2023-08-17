// z warriors.js príklady na rozdelenie podľa alíkov a enemákov:

function seperateWarriorsByType(warriors) {
  const sides = {
    allies: [],
    enemies: [],
  };

  warriors.forEach((warrior) => {
    if (warrior.type === "enemy") {
      sides.enemies.push(warrior);
    } else if (warrior.type === "ally") {
      sides.allies.push(warrior);
    }
  });
  return sides;
}
// const enemies = [], returns { enemies, allies}
//const { enemies, allies } = seperateWarriorsByType(warriors);

const sides = seperateWarriorsByType(warriors);
//console.log(sides.enemies);

function sortMyWarriorsByType(warriors) {
  const warriorsByType = {};

  warriors.forEach((warrior) => {
    const type = warrior.type;

    if (warriorsByType[type]) {
      warriorsByType[type].push(warrior);
    } else {
      warriorsByType[type] = [warrior];
    }
  });

  return warriorsByType;
}

const sorted = sortMyWarriorsByType(warriors);

// console.log(sorted.ally);

function filteredWarriorsByType(warriors) {
  const sides = {
    allies: warriors.filter((warrior) => warrior.type === "ally"),
    enemies: warriors.filter((warrior) => warrior.type === "enemy"),
  };

  return sides;
}

const filtered = filteredWarriorsByType(warriors);

console.log(filtered.allies);
function displayWarriorDetails(warriors, id) {
  const warrior = warriors.find((warrior) => warrior.id === id);

  if (warrior) {
    console.log("Warrior Details:");
    console.log("ID:", warrior.id);
    console.log("Name:", warrior.name);
    console.log("Weapon:", warrior.weapon);
    console.log("Strength:", warrior.strength);
    console.log("Type:", warrior.type);
  } else {
    console.log("Warrior not found.");
  }
}

const detail = displayWarriorDetails(warriors, 7);

console.log(detail);
