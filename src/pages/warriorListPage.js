import warriorListLayout from "../components/warriorsList/warriorListLayout";
import loadWarriors from "../components/dataHandlers/loadWarriors";
let warriors = [];
let wasLoaded = false;

function warriorListPage() {
  if (!wasLoaded) {
    loadWarriors("http://localhost:3000/api-warriors").then((data) => {
      warriors = data;
      wasLoaded = true;
    });
  }

  return warriorListLayout(warriors);
}

/*

function fetched(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error in fetch:", error);
      throw error;
    });
}
// potrebuje params z route.js?
async function warriorListPage() {
  if (!wasLoaded) {
    try {
      const res = await fetched("http://localhost:3000/api-warriors");

      warriors = res;
      wasLoaded = true;
      document.dispatchEvent(new Event("reRender"));
    } catch (error) {
      console.error("Error loading warriors:", error);
    }
  }

  
  warriors.forEach((w) => {
    console.log(w.type);
  });


  return warriorListLayout(warriors);
}*/

export default warriorListPage;
