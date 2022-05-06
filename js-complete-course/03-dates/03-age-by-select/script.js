/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let btn = document.getElementById('run');

    btn.addEventListener('click', function onClick() {
        let inputDay = document.getElementById('dob-day').value;
        let inputMonth = document.getElementById('dob-month').value;
        let inputYear = document.getElementById('dob-year').value;

        let inputDate = `${inputDay}-${inputMonth}-${inputYear}`;
        let age = ageCalc(inputDate);

        console.log(age);

        function ageCalc(birthday) {

            let date = new Date();
            let dateOfBirth = new Date(birthday);
            let age = date.getFullYear() - dateOfBirth.getFullYear();
            let month = date.getMonth() - dateOfBirth.getMonth();
            if (month < 0 || (month === 0 && date.getDate() < dateOfBirth.getDate())) {
                age--;
            }
            return age;
        }

    });

})();