/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// CHALLENGE: When you click the button, display in the console, one after the other (use a loop), each value of the fruits array.

// INFORMATION: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values

(function() {

    const fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];
    const iterator = fruits.values();

    // your code here
    document.getElementById('run').addEventListener("click", function (){
        for (const value of iterator) {
            console.log(value);
        }
    })

})();
