/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// CHALLENGE :
// In the console, for each numbers between 1 and 100 : show "fizz" if the number is a multiple of 3,
// "buzz" if it's a multiple of 5, "fizzbuzz" if it's both, or simply the number if it's none of these.
// if...else statement info --> developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

(function() {

    // your code here
    let i;
    for (i=1; i <= 100; i++) {
        //number divisible by 3 and 5 will always be divisible by 15, console log "FizzBuzz" in place of the number
        if (i%15 === 0) {
            console.log(`FizzBuzz `);
        }
        // Number divisible by 3, console log "Fizz" in place of the number
        else if ((i%3) === 0) {
            console.log(`Fizz `);
        }
        //Number divisible by 5, console log "Buzz" in place of the number
        else if ((i%5) === 0) {
            console.log(`Buzz `)
        }
        // console log the number
        else {
            console.log(i)
        }
    }

})();
