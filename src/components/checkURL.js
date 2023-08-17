import errorPage from "../pages/errorPage";

function checkURL() {
  //toto by išlo asi ku dátam ako by mali ísť warriors ??
  const expectedURLs = [
    "http://localhost:5173/",
    "http://localhost:5173/list",
    "http://localhost:5173/detail-bojovnika/\\d+",
    "http://localhost:5173/about-us",
  ];

  const currentURL = window.location.href;

  const matchFound = expectedURLs.some((url) => {
    return new RegExp("^" + url + "$").test(currentURL);
  });

  if (!matchFound) {
    errorPage();
  }
}

export default checkURL;

//https://regexr.com/

//g = global
