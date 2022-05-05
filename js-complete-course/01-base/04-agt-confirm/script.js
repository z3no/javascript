/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

/*

    Ask three questions to the user: his/her Age, Gender, and the Town where he/she lives.
    Display the collected responses in a dialog box and ask to confirm.
    If not confirmed, re-run the process.

*/

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function myFunction() {

    let age = prompt("What is your age?");
    let gender = prompt("What is your gender?");
    let town = prompt("What is the name of your town?");
    let data = confirm(`Your age is ${age}, you are ${gender} and you live in ${town}`);

    if (data == true) {
        alert("Thanks! Glad to see you still know your age :p!");
    }
    else {
        myFunction();
    }

})();
