function loadWarriors(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Not good: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      document.dispatchEvent(new Event("reRender"));
      return data;
    })
    .catch((error) => {
      console.error("Error while loading warriors:", error);
    });
}

export default loadWarriors;
