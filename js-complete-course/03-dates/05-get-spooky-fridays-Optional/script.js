/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const btn = document.getElementById('run');

btn.addEventListener('click', function calcSpecificDay(){

    let getYear = document.getElementById('year').value;

    let counter = 0;

    for (i = 0; i <= 11; i++) {

        let date = new Date(i + "/13/" + getYear);

        if (date.getDay() === 5) {
            counter++;
        }
    }

    document.getElementById("target").innerHTML = counter;
    console.log(counter);

});