import generateOptions from "./generateDropDownOptions";

function dropDownLayout() {
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

export default dropDownLayout;
