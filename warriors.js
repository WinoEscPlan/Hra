export { warriors, filterWarriorsByType, checkIdInWarriorsArray };
const warriors = [
  {
    id: 1,
    name: "Vaelrick the Ashen",
    weapon: "Sword",
    strength: 80,
    agility: 70,
    type: "enemy",
  },
  {
    id: 2,
    name: "Aetherius the Deathbringer",
    weapon: "Axe",
    strength: 90,
    agility: 60,
    type: "ally",
  },
  {
    id: 3,
    name: "Morwen the Undying",
    weapon: "Bow",
    strength: 70,
    agility: 80,
    type: "enemy",
  },
  {
    id: 4,
    name: "Malachi the Soulflayer",
    weapon: "Spear",
    strength: 75,
    agility: 75,
    type: "ally",
  },
  {
    id: 5,
    name: "Seraphina the Graveborn",
    weapon: "Dagger",
    strength: 65,
    agility: 85,
    type: "enemy",
  },
  {
    id: 6,
    name: "Gideon the Shadowbane",
    weapon: "Hammer",
    strength: 85,
    agility: 65,
    type: "enemy",
  },
  {
    id: 7,
    name: "Lyra the Cursed",
    weapon: "Staff",
    strength: 60,
    agility: 90,
    type: "ally",
  },
  {
    id: 8,
    name: "Ravenna the Dreadheart",
    weapon: "Mace",
    strength: 70,
    agility: 70,
    type: "ally",
  },
  {
    id: 9,
    name: "Magnus the Abyssal",
    weapon: "Halberd",
    strength: 80,
    agility: 60,
    type: "enemy",
  },
  {
    id: 10,
    name: "Sylas the Bloodsworn",
    weapon: "Club",
    strength: 75,
    agility: 75,
    type: "enemy",
  },
  {
    id: 11,
    name: "Mohwyg The Darkeater",
    weapon: "Fire Broadsword",
    strength: 84,
    agility: 75,
    type: "ally",
  },
  {
    id: 6421,
    name: "Test The IDeater",
    weapon: "Fire Broadsword",
    strength: 84,
    agility: 75,
    type: "ally",
  },
];
//sortWarriorsByType

function filterWarriorsByType(warriors, type) {
  return warriors.filter((obj) => obj.type === type);
}

//npm run dev

//lifehack
console.log(warriors);

// porovná ID v url či existuje

function checkIdInWarriorsArray(idToCheck, warriorsArray) {
  const foundWarrior = warriorsArray.find(
    (warrior) => warrior.id === idToCheck
  );
  return !!foundWarrior;
}
