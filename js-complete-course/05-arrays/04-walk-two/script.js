/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: parcours de tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// CHALLENGE: When you click the button, display on the console, one after the other, each value of the array fruits. Use the forEach method.
// INFORMATION: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById('run').addEventListener("click", function (){
        fruits.forEach(elements => console.log(elements));
    });

})();
