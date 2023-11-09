let person = {
  name: "Tomas",
  surname: "Petrzlen",
  address: { street: "jedlickova", city: "Bratislava", number: 82106 },
  setName: function (newName) {
    this.name = newName;
    setTimeout(() => {
      console.log(this.name);
      this.name = newName + newName; //function and arrow pri this
    }, 500);
  },
  getName: function () {
    return this.name;
  },
};

console.log(person.setName("Jakub"));
console.log(person.getName());
// setter getter
/*
let personDva = {
  name: "Tomas",
  surname: "Petrzlen",
  address: { street: "jedlickova", city: "Bratislava", number: 82106 },
  setName: (newName) => {
    this.name = newName;
  },
  getName: () => {
    return this.name;
  },
};

console.log(personDva.getName());
console.log(personDva.setName("Jakub"));*/
