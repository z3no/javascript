/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE: When you click the button, get the number in the input, and show its factorial.

    Factorial = In mathematics, the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point.
    Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is defined as equal to 1.
    Factorial can be calculated using following formula:
    n! = n * (n-1)!
    n! = 1 if n = 0 or n = 1

 */


(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        const getNumber = +document.getElementById('number').value;

        function factorial(getNumber) {
            if (getNumber === 0) return 1;
            return getNumber * factorial(getNumber - 1);
        }
        console.log(factorial(getNumber));
        alert(`The factorial of ${getNumber} = ${factorial(getNumber)}`)

    });

})();
