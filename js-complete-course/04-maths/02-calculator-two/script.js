/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// see developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {

        let result;
        const one = +document.getElementById("op-one").value;
        const two = +document.getElementById("op-two").value;

        // perform the operation
        switch (operation) {
            case 'addition':
                result = one + two;
                console.log(`${one} + ${two} = ${result}`);
                break;
            case 'substraction':
                result = one - two;
                console.log(`${one} - ${two} = ${result}`);
                break;
            case 'multiplication':
                result = one * two;
                console.log(`${one} * ${two} = ${result}`);
                break;
            case 'division':
                result = one / two;
                console.log(`${one} / ${two} = ${result}`);
                break;
        }
        alert(`The answer is ${result}`);
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
