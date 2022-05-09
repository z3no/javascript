/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        const valueNumbers = document.getElementById('numbers').value;

        // MDN info developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        const arrayNumbers = valueNumbers.split(", ");
        console.log(arrayNumbers);
        // MDN info developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        arrayNumbers.sort((a, b) => a - b);
        console.log(arrayNumbers);
        // MDN info developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
        document.getElementById('numbers').value = arrayNumbers.join(', ');
    });

})();