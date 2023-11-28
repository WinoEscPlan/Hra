import dropDownLayout from "./dropDownLayout";

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

  return dropDownLayout();
}

export default dropDownWarriorsSelect;

/*

METHOD GET HTML verzia

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
