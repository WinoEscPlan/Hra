let person = {
  name: "Tomas",
  surname: "Petrzlen",
  address: { street: "jedlickova", city: "Bratislava", number: 82106 },
};

let secondName = person.name; //priraduje sa kopia
let secondStreet = person.address.street; //priraduje sa kopia
let secondAddress = person.address; // priraduje sa odkaz na objekt

secondName = "Miro";
secondStreet = "Borovicova";

secondAddress.city = "Senec"; //pracujes s povodnym objektom

secondAddress = { street: "tomasikova", city: "Nitra", number: 342 };

person.name = "Peter";

console.log(secondName, secondStreet, secondAddress);
console.log(person);

//let name = person.name;
//let surname = person.surname;

let { name, surname, ...halfPerson } = person; //... = z objektu vytahujem property do nového objektu
let brother = { name: "Marek", surname: surname, ...halfPerson };
