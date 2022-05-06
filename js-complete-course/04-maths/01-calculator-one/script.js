/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    // Unary plus (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let one = +document.getElementById("op-one").value;
        let two = +document.getElementById("op-two").value;
        let addition = one + two;
        console.log(addition);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let one = +document.getElementById("op-one").value;
        let two = +document.getElementById("op-two").value;
        let subtraction = one - two;
        console.log(subtraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let one = +document.getElementById("op-one").value;
        let two = +document.getElementById("op-two").value;
        let multiplication = one * two;
        console.log(multiplication);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        // let one = +document.getElementById("op-one").value;
        // let two = +document.getElementById("op-two").value;
        let one = parseInt(document.getElementById("op-one").value);
        let two = parseInt(document.getElementById("op-two").value);
        let division = one / two;
        console.log(division);
    });
})();
