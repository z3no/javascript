/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE:
 *      When you click the button, check whether the two passwords entered in the input fields are exactly the same.
 *      If they are not, add the class "error" to the input boxes.
 *
 *  INFORMATION:
 *      https://developer.mozilla.org/en-US/docs/Web/API/Element/className
 */

(function() {

    // your code here
    document.getElementById('run').addEventListener("click", function (){
        const password1 = document.getElementById('pass-one');
        const password2 = document.getElementById('pass-two');

        if (password1.value === password2.value) {
            console.log('true');
        } else {
            password1.className = "error";
            password2.className = "error";
        }

    })

})();
