/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE:
 *      When you click the button, check whether the two passwords entered in the input fields are exactly the same.
 *      If they are not, change the border color of the input boxes to be red.
 *
 *  INFORMATION:
 *
 */

(function password() {

    // your code here
    document.getElementById('run').addEventListener("click", function (){

        const password1 = document.getElementById('pass-one');
        const password2 = document.getElementById('pass-two');

        if (password1.value === password2.value) {
            document.getElementById('target').innerHTML = "Your passwords match!";
        } else {
            password1.style.border = '1px solid red';
            password2.style.border = '1px solid red';
            document.getElementById('target').innerHTML = "Your passwords don't match!"
        }
    })
})();
