import { menuRows } from "./component/menu-table/menu-tbody";

let index; // variable to set the selected row index

function getSelectedRow() {
  const  table = document.getElementById("table");

  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      // clear the selected from the previous selected row
      // the first time index is undefined
      if (typeof index !== "undefined") {
        table.rows[index].classList.toggle("selected");
      }

      index = this.rowIndex;
      this.classList.toggle("selected");

    };
  }
}

function moveUp() {
  const rows = document.getElementById("table").rows;
  const parent = rows[index].parentNode;

  if (index > 1) {
    parent.insertBefore(rows[index], rows[index - 1]);
    // when the row go up the index will be equal to index - 1
    index--;
  }
}

function moveDown() {
  const rows = document.getElementById("table").rows;
  const parent = rows[index].parentNode;

  if (index < rows.length - 1) {
    parent.insertBefore(rows[index + 1], rows[index]);
    // when the row go down the index will be equal to index + 1
    index++;
  }
}

const setupButtons = () => {
 document.getElementById("buttonUp").addEventListener("click", moveUp);

 const buttonDown = document.getElementById("buttonDown");
 buttonDown.addEventListener('click', moveDown);
}

getSelectedRow()

setupButtons()

// 3. insert table body with data rows

const addDataRows = (rowElems) => {
  const table = document.getElementById("table");
  table.innerHTML = ""
  table.innerHTML = rowElems
}

addDataRows(menuRows)

// 4. Add EventLisnter
function startToDragRow(event) {
  const index = event.srcElement.rowIndex
  console.log('srouceIndex', index);

  event.dataTransfer.setData("text", index);
}

function dropToTheRow(event) {
  event.preventDefault();

  const rows = document.getElementById("table").rows

  const sourceRowIndex = parseInt(event.dataTransfer.getData("text"), 10);

  const thisRow = event.srcElement.parentNode;
  const currentRowIndex = thisRow.rowIndex;

  const parentForAllRows = thisRow.parentNode
  console.log('parentForAllRows', parentForAllRows);


  parentForAllRows.insertBefore(rows[sourceRowIndex], rows[currentRowIndex]);

  // console.log('rowIndex', rowIndex);


  // parent.insertBefore(rows[indx],rows[index - 1]);
}

function dragOverTheRow(event) {
  event.preventDefault();

  // console.log('targetEvent',event);



  // const parent = event.target.parentNode;

  // var data = ev.dataTransfer.getData("text");
  // parent.insertBefore(rows[index], rows[index - 1]);
  // parent.insertBefore(event.target, document.getElementById(data));

  // event.target.appendChild(document.getElementById(data));


  // var data = event.dataTransfer.getData("text");
  // console.log(data);
}

const addDataRowEventListner = () => {
  console.log("drag and drop");

  const table = document.getElementById("table");
  const rows = table.rows;

  for (var i = 1; i < rows.length; i++) {
    rows[i].addEventListener('dragstart', startToDragRow);
    rows[i].addEventListener('drop', dropToTheRow);
    rows[i].addEventListener('dragover', dragOverTheRow);
  }
}

// onDragRowStart()
addDataRowEventListner()
