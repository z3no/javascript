/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//  CHALLENGE: When you click the button, log in the console if, yes or no, there is an apple in the array fruits.
//  INFORMATION: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

(function() {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    document.getElementById('run').addEventListener("click", function (){
        // The array.includes() method determines whether an array includes a certain value among its entries, returning "true" or "false" as appropriate.
        // This will output true
        //      console.log(fruits.includes('apple'));
        // This will output false
        //      console.log(fruits.includes('pear'));
        if (fruits.includes('apple')) {
            console.log('Yes!');
        } else {
            console.log('No!')
        }
    })

})();
