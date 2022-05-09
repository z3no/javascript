/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*  CHALLENGE: When you click the button, do the following transformations to the array fruits:
    remove the first and the last element, add an element "banana" at the start of the array,
    and add an element "kiwi" at the end.*/

/*
    INFORMATION about the used methods can be found at:
    developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift    -   removing the first element of an array
    developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop      -   removing the last element of an array
    developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift  -   adds an element to the beginning of an array
    developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push     -   adds an element to the end of an array
 */

(function() {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById('run').addEventListener("click", function (){
        console.log('fruits before:', JSON.stringify(fruits));
        //array.shift removes the first element from an array
        fruits.shift();
        //array.unshift adds one or more elements to the beginning of an array
        fruits.unshift('banana');
        //array.pop removes the last element from an array
        fruits.pop();
        //array.push adds one or more elements to the end of an array
        fruits.push('kiwi');
        console.log('fruits after:', fruits);
    })

})();
