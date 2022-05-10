/* becode/javascript
 *
 * /06-dom/02-select-two/script.js - 6.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE:
 *      Select the element with the id "target" (not using getElementById!) and replace its content with "owned".
 *
 *  INFORMATION:
 *      developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 */

(function() {

    // your code here
    document.querySelector("#target").innerHTML = "OWNED TWICE!";

})();