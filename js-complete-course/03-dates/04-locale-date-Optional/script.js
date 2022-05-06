/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    //At MDN Javascript > Standard built-in objects > Date from .toDateString() you can find a lot of information.

    const date = new Date();
    let dateOfTheDay = date.toDateString();
    let hourOfTheDay = date.toLocaleTimeString();
    let today = `${dateOfTheDay}, ${hourOfTheDay}`;

    document.getElementById('target').innerHTML = today;

})();
