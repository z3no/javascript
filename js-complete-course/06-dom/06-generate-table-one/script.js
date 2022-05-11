/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE:
 *      Inside the element with id "target", create an HTML table with 1 column and 10 rows.
 *
 *  INFORMATION:
 *      https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
 *      https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 *      https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 *      https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
 *      https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 */

(function generate_table() {

    // your code here
    // get the reference for the target id
    const target = document.getElementById('target');

    // creating a table and a table body element
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // creating all cells
    for (let i = 1; i <= 10; i++) {
        // creating a table row
        const row = document.createElement('tr');

        for (let j = 1; j <= 1; j++) {
            // creating a <td> element
            const column = document.createElement('td');
            // creating a text node
            const text = document.createTextNode(`Cell in row ${i}, column ${j}`);
            // the text becomes the content of the <td>
            column.appendChild(text);
            // put the <td> at the end of the table row
            row.appendChild(column);
        }
        // add the row to the end of the table body
        tbody.appendChild(row);
    }

    // put the <tbody> inside the <table>
    table.appendChild(tbody);
    // put the <table> inside the div with id target
    target.appendChild(table);

})();
