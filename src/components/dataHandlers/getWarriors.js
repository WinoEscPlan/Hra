function getWarriors(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .catch((error) => {
      console.error("Error in fetch:", error);
      throw error;
    });
}

// AJAX verzia

/*
function loadAjax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.onload = () => {
      resolve(xhr.responseText);
    };
    xhr.onerror = () => reject(xhr.statusText);

    xhr.send();
  });
}*/

export default getWarriors;
