let params = {
  name: "Jozef",
};
params.name = "fero"; //prepíše stávajucu property
params["name"] = "jano"; //"v uvodzovkach je property"
let anotherName = "name";
params[anotherName] = "karol"; // iba názov je nový, premenná

params.surname = "mrkvicka"; //nový názov/property sa pridá do objektu

params.address = {
  city: "Bratislava",
  street: "Podzahradna",
  number: 42,
};

params.surname = "jahodova";
params.address.city = "Nitra";

let field = "age";
let fieldValue = "33";

params[field] = fieldValue;

console.log(params);
console.log(params.address.city);
console.log(anotherName);
