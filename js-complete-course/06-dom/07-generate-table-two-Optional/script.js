/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE:
 *      Inside the element with id "target", create an HTML table with 10 columns and 10 rows, containing the tables of multiplication from 1 to 10.
 *
 *  INFORMATION:
 *      See exercise 06 of chapter 06 Dom, think logical about what kind of calculation u have to make for the tables of multiplication.
 */

(function() {

    // your code here
    const target = document.getElementById('target');

    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <= 10; j++) {
            const column = document.createElement('td');
            const content = document.createTextNode(`${i*j}`);
            column.appendChild(content);
            row.appendChild(column);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    target.appendChild(table);

})();
