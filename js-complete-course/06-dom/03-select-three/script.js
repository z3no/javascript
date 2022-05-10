/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE:
 *      Select the elements with the class "target" and replace their content with "owned"
 *
 *  INFORMATION:
 *      developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
 *      developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
 *      developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
 */

(function() {

    // your code here

    const getClass = document.getElementsByClassName('target');
    for (let i = 0; i < getClass.length; i++){
        getClass[i].innerText = "Owned";
    }

})();
