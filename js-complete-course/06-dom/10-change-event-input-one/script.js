/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE:
 *      Listen for changes in the input field and display the number of characters entered in the counter span.
 *      As soon as 10 characters have been entered, don't allow any more characters to be typed.
 *
 *  INFORMATION:
 *      https://www.w3schools.com/jsref/prop_search_maxlength.asp
 *      https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
 */

(function() {

    // your code here
    document.getElementById('pass-one').maxLength = "10";
    const input = document.getElementById('pass-one');


    input.addEventListener("keyup", counter);

    function counter() {
        let inputValue = input.value;
        let inputLength = inputValue.length;

        document.getElementById('counter').textContent = `${inputLength}/10`
    }



})();
