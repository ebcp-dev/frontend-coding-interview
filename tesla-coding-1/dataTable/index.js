import { data } from '../data.js';

const dataTable = document.getElementById('data-table');

const regionUS = data.filter((item) => item.region === 'US');
const regionEU = data.filter((item) => item.region === 'EU');
const regionCA = data.filter((item) => item.region === 'CA');

function getData() {
  addRows('US', regionUS);
  addRows('EU', regionEU);
  addRows('CA', regionCA);
}

getData();

function addRows(currentRegion, regionArray) {
  console.log(regionArray);
  const totalSum = regionArray.reduce(
    (sum, currItem) => sum + currItem.sales,
    0
  );

  let dataRows = `
        <tr>
          <td>${currentRegion}</td>
          <td>sum</td>
          <td>${totalSum}</td>
        </tr>
      `;

  regionArray.forEach((item) => {
    dataRows = dataRows.concat(`<tr>
          <td>${item.region}</td>
          <td>${item.model}</td>
          <td>${item.sales}</td>
        </tr>`);
  });
  dataTable.insertAdjacentHTML('beforeend', dataRows);
}
