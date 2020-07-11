/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
<<<<<<< HEAD
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        let result = row.cells[i].style.backgroundColor = 'red';
      }
  }
=======
  let rowsLength = table.rows.length;
  let rows = table.rows;

  for (let i = 0; i < rowsLength; i++) {
    let row = rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
}
>>>>>>> 388e124a4ec2f253d12de08da99063e390a6194b
