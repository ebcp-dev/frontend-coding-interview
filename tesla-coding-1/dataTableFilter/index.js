import { data } from '../data.js';

const dataTable = document.getElementById('data-table');
let regionFilter = document.getElementById('regions');
let modelFilter = document.getElementById('models');

let dataArr = data;

regionFilter.onchange = handleRegionFilter;
modelFilter.onchange = handleModelFilter;

addRows(dataArr);

function handleRegionFilter() {
  switch (regionFilter.value) {
    case 'US':
      dataArr = data.filter((item) => item.region === 'US');
      addRows(dataArr);
      break;
    case 'EU':
      dataArr = data.filter((item) => item.region === 'EU');
      addRows(dataArr);
      break;
    case 'CA':
      dataArr = data.filter((item) => item.region === 'CA');
      addRows(dataArr);
      break;
    case 'all':
      dataArr = data;
      addRows(dataArr);
      break;
  }
}

function handleModelFilter() {
  const region = regionFilter.value === 'all';
  switch (modelFilter.value) {
    case 'A':
      dataArr = dataArr.filter(
        (item) => item.model === 'A' && item.region === region
      );
      addRows(dataArr);
      break;
    case 'B':
      dataArr = dataArr.filter(
        (item) => item.model === 'B' && item.region === region
      );
      addRows(dataArr);
      break;
    case 'C':
      dataArr = dataArr.filter(
        (item) => item.model === 'C' && item.region === region
      );
      addRows(dataArr);
      break;
    case 'D':
      dataArr = dataArr.filter(
        (item) => item.model === 'D' && item.region === region
      );
      addRows(dataArr);
      break;
    case 'all':
      dataArr = data;
      addRows(dataArr);
      break;
  }
}

function addRows(dataRows) {
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
