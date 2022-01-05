import { data } from '../data.js';

const dataTable = document.getElementById('data-table');
let regionFilter = document.getElementById('regions');
let modelFilter = document.getElementById('models');

let dataArr = data;

regionFilter.onchange = handleRegionFilter;
modelFilter.onchange = handleModelFilter;

populateTable(dataArr);

function handleRegionFilter() {
  if (regionFilter.value === 'all') {
    dataArr = data;
    populateTable(dataArr);
  } else {
    if (modelFilter.value !== 'all') modelFilter.value = 'all';

    dataArr = data.filter((item) => item.region === regionFilter.value);
    populateTable(dataArr);
  }
}

function handleModelFilter() {
  if (modelFilter.value === 'all') {
    populateTable(dataArr);
  } else {
    let regionFiltered = dataArr.filter(
      (item) => item.model === modelFilter.value
    );
    populateTable(regionFiltered);
  }
}

function populateTable(dataRows) {
  let tableRows = `
      <tr id="data-column">
        <th>region</th>
        <th>model</th>
        <th>sales</th>
      </tr>`;

  dataRows.forEach((item) => {
    tableRows = tableRows.concat(`
    <tr>
      <td>${item.region}</td>
      <td>${item.model}</td>
      <td>${item.sales}</td>
    </tr>`);
  });
  dataTable.innerHTML = tableRows;
}
