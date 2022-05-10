/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE:  When you click the button, remove the duplicates from the array fruits and display the resulting array in the console.
 *              Each value should be there one time, and one time only.
 */

/*  INFORMATION:
                A "Set" is a collection of unique values. To remove duplicates from an array:
                    1) Convert an array of duplicates to a "Set". The new "Set" will implicitly remove duplicate elements.
                    2) Convert the "Set" back to an array.
                Also take a look at - developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

(function() {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById('run').addEventListener("click", function (){
        let uniqueFruits = [new Set(fruits)];
        console.log(uniqueFruits);
    });
})();