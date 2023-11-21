class Osoba {
  #nameDva = "nezadane meno";

  constructor(name) {
    this.name = name;
    console.log("vytváram novú inštanciu"); //instanceOf
  }

  getName() {
    return this.name;
  }
}
// prototypova dedičnosť
class Zamestnanec extends Osoba {
  plat = 10000;

  constructor(name) {
    super(name);
  }
}

let fero = new Osoba("Tomáš");
fero.name = "Peter";

let jozo = new Osoba("Jakub");
//jozo.name = "Karol";
console.log(fero);
console.log(fero.getName());

console.log(jozo.getName());

class Animal {
  constructor(name, skin) {
    this.name = name;
    this.skin = skin;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  jump() {
    console.log(`${this.name} can jump`);
  }
}

class Bird extends Animal {
  constructor(name, skin) {
    super(name, skin);
  }

  speak() {
    console.log(`${this.name} screams.`);
  }

  flight() {
    console.log(`${this.name} flies in sky`);
  }

  hasFeathers() {
    console.log(`${this.name} has ${this.skin}`);
  }
}

const d = new Dog("Dušan");
console.log(d.speak());

const a = new Animal("Evžen");
console.log(a.speak());

const b = new Bird("Lori", "feathers");
console.log(b.flight());
console.log(b.speak());
console.log(b.hasFeathers());
