import generateOptions from "./generateDropDownOptions";

function submitForm() {
  let selectedValue = document.getElementById("selectBox").value;
  let queryParams = `?type=${encodeURIComponent(selectedValue)}`;
  let newUrl = window.location.href.split("?")[0] + queryParams;
  return (window.location.href = newUrl);
}

function dropDownWarriorsSelect() {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("selectBox").addEventListener("change", submitForm);
  });

  return `<h1>Choose Your Side</h1>
  <form id="warriorsForm">
    <label for="selectBox">Select an alignment:</label>
    <select id="selectBox" name="type">
      <option>Select any...</option>  
      <option value="All of Them">All Warriors</option>  
      ${generateOptions()}
      <option value="evil error test">error_test</option>
    </select>
  </form>`;
}

export default dropDownWarriorsSelect;
/*
return `<h1>Choose Your Side</h1>
    <form action="/list" method="GET">
    <label for="selectBox">Select an alignment:</label>
    <select id="selectBox" name="type">
        <option value="All of Them">All Warriors</option>  
        ${generateOptions()}
        <option value="evil error test">error_test</option>
    </select>
    <input type="submit" value="Submit">
  </form>`;
*/

//neberie mi prvú možnosť - vždy od druhej ak je aj tá istá
/*
použitie onchannge = "submitForm()" v html v select -> iba to prilepí do url ?type....
window.submitForm = () => {
  let selectedValue = document.getElementById("selectBox").value;

  let queryParams = `?type=${selectedValue}`;

  let newUrl = window.location.href.split("?")[0] + queryParams;

  window.location.href = newUrl;
};

*/
